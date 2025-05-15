// Untuk TypeScript, kita bisa menggunakan interface untuk model
export interface User {
  id: number;
  name: string;
  email: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// Jika nanti menggunakan database seperti MongoDB dengan Mongoose
// kita akan mendefinisikan schema di sini
