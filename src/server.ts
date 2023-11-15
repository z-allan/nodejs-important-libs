import { z } from 'zod'

const userSchema = z.object({
  name: z.string()
    .min(3, {message: 'Name must have at least 3 characters.'})
    .transform(name => name.toLocaleUpperCase()),
  age: z.number().min(18, {message: 'This user must be at least 18 years old.'}),
})

type User = z.infer<typeof userSchema>

function saveUserToDatabase(user: User) {
  //save to db
  const { name, age } = userSchema.parse(user)
  console.log(name, age)
}

saveUserToDatabase({
  name: 'Teste',
  age: 98
})