import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common'; 
import { Observable } from 'rxjs'; 
 
@Injectable() 
export class StaffGuard implements CanActivate { 
    canActivate( 
        context: ExecutionContext, 
    ): boolean | Promise<boolean> | Observable<boolean> { 
        const request = context.switchToHttp().getRequest(); 
 
        // Simple rule: Only DELETE requests need a badge 
        if (request.method === 'GET') { 
            const hasBadge = request.headers['x-staff'] === 'true'; 
            if (!hasBadge) { 
                console.log('Security: Stop! You need a staff badge to delete orders.'); 
                return false; 
            } 
        } 
 
        console.log('Security: You may pass.'); 
        return true; 
    } 
} 
