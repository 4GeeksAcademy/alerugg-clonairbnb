import { NextResponse, type NextRequest } from "next/server";
import { properties } from "@/data/properties";

const propertyIds = new Set(properties.map((property) => property.id));

export function proxy(request: NextRequest) {
  const id = request.nextUrl.pathname.split("/")[2];

  if (propertyIds.has(id)) return NextResponse.next();

  return NextResponse.rewrite(new URL("/property-not-found", request.url));
}

export const config = {
  matcher: "/property/:id",
};
