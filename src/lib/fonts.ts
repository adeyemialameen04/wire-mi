import { Be_Vietnam_Pro } from "next/font/google";
import { Space_Grotesk as SpaceGrotesk } from "next/font/google";
import localFont from "next/font/local";

export const geistSans = localFont({
	src: "../app/fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
export const geistMono = localFont({
	src: "../app/fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const recoletaMedium = localFont({
	src: "../app/fonts/Recoleta-Medium.woff2",
	variable: "--font-recoleta-medium",
	weight: "500",
});

export const recoletaAltThin = localFont({
	src: "../app/fonts/RecoletaAlt-Thin.woff2",
	variable: "--font-recoleta-thin",
	weight: "500",
});

export const beVietnamPro = Be_Vietnam_Pro({
	variable: "--font-be-vietnam-pro",
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const spaceGrotesk = SpaceGrotesk({
	subsets: ["latin"],
	variable: "--font-space-grotesk",
	weight: ["300", "400", "500", "600", "700"],
});
