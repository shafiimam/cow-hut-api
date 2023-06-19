import { Model } from 'mongoose';

export interface IUser {
	phoneNumber: string;
	role: 'seller' | 'buyer';
	password: string;
	name: {
		firstName: string;
		lastName: string;
	};
	address: string;
	budget: number;
	income: number;
}

export type UserModel = Model<IUser, Record<string, unknown>>;
