import Users from '../../db/user.db';
// import jwt from 'jsonwebtoken';

class AuthService {
  constructor() {}

  //   public async login(user) {
  //     // extract the password for the user information //
  //     // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //     const { password, ...userWithoutPassword } = user.toJSON();
  //     const payloadUser = userWithoutPassword;

  //     // generate an access token for the new user //
  //     const accessToken = this.generateAccessToken(payloadUser);

  //     // return the new information //
  //     return { user: userWithoutPassword, accessToken };
  //   }

  public checkUserExistAndPasswordMatch(email: string, password: string) {
    const user = Users.find((user) => email === user.email);
    // check if user exist
    if (!user) {
      return 'User not found';
    }
    if (!this.validatePassword(user.id, password)) {
      return 'Admin email or password is incorrect';
    }
    return false;
  }

  public async getUserForLogin(email: string, password: string) {
    // find the user //
    const user = Users.find((user) => email === user.email && password === user.password);
    return user;
  }

  //   public async registerUser(user: Partial<User>) {
  //     // check if the user exist //
  //     const userExist = await this.UserModel.scope('withPassword').findOne({
  //       where: { email: user.email }
  //     });
  //     // if the user exist throw an error //
  //     if (userExist) {
  //       // throw new ConflictError('User already exist');
  //       return { message: 'User already exist' };
  //     }
  //     // // create a new user //
  //     const newUser = await this.UserModel.create({
  //       ...user
  //     });
  //     //generate an access token for the new user //
  //     const accessToken = this.generateAccessToken(newUser);
  //     // // return the new user //
  //     return { user: newUser, accessToken };
  //   }
  // put a pin on this

  //   public verifyToken(token: string): DecodedToken {
  //     try {
  //       const payload = jwt.verify(token, 'secret') as unknown as User;
  //       return {
  //         payload,
  //         expired: false
  //       };
  //     } catch (error) {
  //       return {
  //         payload: null,
  //         expired: error.message.includes('expired') ? error.message : error
  //       };
  //     }
  //   }

  // put a pin on this one //
  //   private generateAccessToken(user: Partial<User>) {
  //     // generate the access token and then send it out - input the payload, the secrete and the options you want //
  //     const accessToken = jwt.sign({ ...user }, 'secret', {
  //       // algorithm: 'RS256',
  //       expiresIn: '10h'
  //     });

  //     // return the accessToken //
  //     return accessToken;
  //   }
  private validatePassword(id: number, password: string): boolean {
    try {
      // check if teh password is correct //
      const user = Users.find((user) => id === user.id);
      return password === user?.password;
    } catch (error) {
      throw new Error('Error validation password at the moment');
    }
  }
  //   private async updateLastLogin(user: User): Promise<void> {
  //     await user.set('lastLogin', new Date()).save();
  //   }
}

//   private async updateLastLogin(user: User): Promise<void> {
//     await user.set('lastLogin', new Date()).save();
//   }
// }?
const authService = new AuthService();
export default authService;
