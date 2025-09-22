export default function Footer() {
    return (
        <footer className="w-full text-white">
            <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col items-center">
                <div className="flex items-center space-x-3 mb-6">
                    <h1 className="text-3xl font-bold cursive">👑Sowmya's Universe💕</h1>
                </div>
                <p className="text-center max-w-xl text-sm font-normal leading-relaxed">
                    Hope you enjoyed scrolling! Don’t ask me why I made this—I was just bored. I got the idea for this site when you revealed your face. Heheheheheh.
                    So upload, scroll, and cherish the memories.
                </p>
            </div>
            <div className="border-t border-white">
                <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm font-normal">
                    Made with 💖 by Manjunadh Ganta &copy; {new Date().getFullYear()}. All rights reserved.
                </div>
            </div>
        </footer>
    );
};