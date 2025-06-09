import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST() {
    try {

        cookies().set('token', '', { expires: new Date(0) });
        return NextResponse.json({ message: 'Logged out', success: true });
    } catch (error) {
        return NextResponse.json({ message: 'Failed to Logout', success: false })
    }
}
