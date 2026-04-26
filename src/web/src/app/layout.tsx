// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Providers from "./providers";
import { Footer } from "@/components/navigation/footer";

const interSans = Inter({
	variable: "--font-inter-sans",
	subsets: ["latin"]
});

// export const metadata: Metadata = {
// 	metadataBase: new URL("https://klrnbk.nl"),
// 	title: { template: "Daan Klarenbeek - %s", default: "Daan Klarenbeek - Full-stack developer building apps for the internet" },
// 	description: "Full-stack developer building apps for the internet",
// 	twitter: { card: "summary" },
// 	openGraph: {
// 		title: "Daan Klarenbeek",
// 		description: "Full-stack developer building apps for the internet",
// 		images: [{ url: PROFILE_ICON, alt: "Profile picture", type: "image/png" }]
// 	}
// };

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html className="scroll-smooth" lang="en">
			<head>
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=3" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=3" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=3" />
				<link rel="manifest" href="/site.webmanifest?v=3" />
				<link rel="mask-icon" href="/safari-pinned-tab.svg?v=3" color="#171717" />
				<link rel="shortcut icon" href="/favicon.ico?v=3" />
				<meta name="msapplication-TileColor" content="#171717" />
			</head>

			<body className={`${interSans.variable} antialiased`}>
				<Providers>
					{children}
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
