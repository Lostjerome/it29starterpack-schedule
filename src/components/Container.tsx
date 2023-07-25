function Container({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen h-full max-w-7xl m-auto p-3 pt-10">
            {children}
        </div>
    );
}

export default Container;
