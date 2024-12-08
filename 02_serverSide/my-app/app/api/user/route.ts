export async function GET() {
  return Response.json({ username: "parth", email: "parth@gmail.com" });
}

export async function POST() {
    return Response.json({ username: "parth", email: "parth@gmail.com" });
}

// when hit "http://localhost:3001/api/user"