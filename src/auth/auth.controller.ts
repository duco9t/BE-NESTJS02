import { Controller, Post, Body, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from 'src/users/dto/auth-dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() authDto: AuthDto, @Req() req: any) {
    const user = await this.authService.validateUser(
      authDto.username,
      authDto.password,
    );

    return this.authService.login(user, req);
  }
}
