import { env } from '$env/dynamic/public'

export async function handle({ event, resolve }) {
  console.log('handle', env)
  return await resolve(event);
}