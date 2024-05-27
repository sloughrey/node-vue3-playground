export default interface iUser {
    id: number;
    name: string;
    email: string;
    email_verified_at: Date;
    created_at: Date;
    updated_at: Date;

    isEmailVerified(): boolean;
    log(): void;
}