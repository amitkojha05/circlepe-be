import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './login.dto';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async login(loginDto: LoginDto) {
    const { username, password } = loginDto;

    // Hardcoded user validation logic
    if (username === 'admin' && password === 'yourPassword') {
      const payload = { username, sub: 1 };  // Example payload with user ID
      return {
        access_token: this.jwtService.sign(payload),
      };
    } else {
      throw new Error('Invalid credentials');
    }
  }
}