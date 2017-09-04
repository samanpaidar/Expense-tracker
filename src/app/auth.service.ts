export class AuthService {

	authenticate(username:string, password:string): boolean {
		return password.length>3;
	}
}