export default function Login() {
  return <div>Login</div>;
}

{
  /*
// This will return nothing while the user is logged out
const { data } = await supabase.from('profiles').select('id, username, avatar_url, website')

// After the user is logged in, this will only return
// the logged-in user's data - in this case a single row
const { error } = await supabase.auth.signIn({ email })
const { data: profile } = await supabase
  .from('profiles')
  .select('id, username, avatar_url, website')

  //you can assign metadata to users on signup
  const { data, error } = await supabase.auth.signUp({
    email: 'example@email.com',
    password: 'example-password',
    options: {
      data: {
        first_name: 'John',
        age: 27,
      },
    },
  })

  //to view metadata
  const {
  data: { user },
} = await supabase.auth.getUser()
let metadata = user.user_metadata

*/
}
