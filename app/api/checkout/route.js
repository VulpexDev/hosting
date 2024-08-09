import {NextResponse} from "next/server"; 
import Stripe from 'stripe'


// key desde stripe
const stripe =  new Stripe('sk_test_51MbOhOCu58rUlZYzA7pueC2CuHALT0Cnz5vFM4gyg0bXFwTpDh4PjwA5km43IMQZyUwJgevRay5vq3YNi74ekTc8006culPSxn')


export function POST(request) {
    return NextResponse.json("pagando producto....")
}