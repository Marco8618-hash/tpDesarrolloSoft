import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { clienteService } from './clienteService';
import { ClientePersona } from '../domain/clientePersona';
import { ClienteEmpresa } from '../domain/clienteEmpresa';

export interface AuthTokenPayload {
  id: number;
  cuit: string;
  tipo: 'persona' | 'empresa';
  nombre?: string;
  razonSocial?: string;
}

export class AuthService {
  private clienteService = clienteService;

  private get jwtSecret(): string {
    return process.env.JWT_SECRET || 'super_secret_techrepair_key_2026';
  }

  private get jwtExpiresIn(): string {
    return process.env.JWT_EXPIRES_IN || '8h';
  }

  // Genera el token JWT a partir del payload
  generateToken(payload: AuthTokenPayload): string {
    return jwt.sign(payload, this.jwtSecret, {
      expiresIn: this.jwtExpiresIn as any,
    });
  }

  // LOGIN - Valida credenciales por CUIT y Password y genera el token
  async login(cuit: string, password: string): Promise<{ token: string; usuario: AuthTokenPayload }> {
    if (!cuit || cuit.trim() === '') {
      throw new Error('El CUIT es obligatorio');
    }
    if (!password || password.trim() === '') {
      throw new Error('La contraseña es obligatoria');
    }

    const cliente = await this.clienteService.getByCuit(cuit);
    if (!cliente) {
      throw new Error('Credenciales inválidas');
    }

    if (cliente.fechaBaja) {
      throw new Error('El usuario se encuentra dado de baja');
    }

    if (!cliente.password) {
      throw new Error('El usuario no posee una contraseña asignada');
    }

    const esValida = await bcrypt.compare(password, cliente.password);
    if (!esValida) {
      throw new Error('Credenciales inválidas');
    }

    let tipo: 'persona' | 'empresa' = 'persona';
    let nombre: string | undefined;
    let razonSocial: string | undefined;

    if (cliente instanceof ClientePersona) {
      tipo = 'persona';
      nombre = `${cliente.nombre} ${cliente.apellido}`;
    } else if (cliente instanceof ClienteEmpresa) {
      tipo = 'empresa';
      razonSocial = cliente.razonSocial;
    }

    const payload: AuthTokenPayload = {
      id: cliente.idcliente,
      cuit: cliente.cuit,
      tipo,
      ...(nombre ? { nombre } : {}),
      ...(razonSocial ? { razonSocial } : {}),
    };

    const token = this.generateToken(payload);
    return { token, usuario: payload };
  }

  // Verifica y decodifica un token JWT
  verifyToken(token: string): AuthTokenPayload {
    return jwt.verify(token, this.jwtSecret) as AuthTokenPayload;
  }
}

export const authService = new AuthService();
