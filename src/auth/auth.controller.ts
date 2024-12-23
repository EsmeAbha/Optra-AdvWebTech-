import {Body,Controller,Get,HttpCode,HttpStatus,Post,Req,Request,UseGuards} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from './public.decorator';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService,
        private authGuard: AuthGuard
    ) {}

    @HttpCode(HttpStatus.OK)
    @Public()
    @Post('login')
    signIn(@Body() signInDto ) {
        return this.authService.signIn(signInDto.username, signInDto.password);
    }


    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }

    @Post('logout')
    logout(@Req() req ) {
        const token=req.headers.authorization?.split(' ')[1];
        console.log("Log out successfull: ", this.authGuard)
        return this.authService.logout(token, this.authGuard);
    }
}
