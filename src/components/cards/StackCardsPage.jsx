import { useState } from 'react';

const code = `function StackCard1() {
    return (
            <div className='p-2 flex flex-col gap-2 bg-[var(--fg)] rounded-xl max-w-[270px]'>
                <span className='px-2 py-6 flex flex-col bg-blue-300 gap-6 rounded-xl'>
                    <span className='flex flex-col gap-1'>
                    <h3 className='font-semibold '>Web Design</h3>
                    <p >Crafs engaging, user friendly websites.</p>
                    </span>
                    <span className='grid grid-cols-2 gap-1'>
                        <p className='px-1 bg-blue-400  rounded-full text-center font-medium'>Landing Page</p>
                        <p className='px-1 bg-blue-400 rounded-full text-center font-medium'>Website</p>
                        <p className='px-1 bg-blue-400 rounded-full text-center font-medium'>One Page</p>
                    </span>
                </span>
                <span  className='px-2 flex flex-row justify-between'>
                    <p className='text-[var(--bg)] text-xl font-medium'>Explore</p>
                     <p className='text-[var(--bg)] text-xl font-medium cursor-pointer hover:scale-120'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className='fill-[var(--bg)]'><path d="M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z"/></svg>
                     </p>
                </span>
            </div>
    )
}`;

export default function StackCardsPage() {
    const [tab, setTab] = useState('preview');
    const [copied, setCopied] = useState(false);

    const copy = async () => {
        try {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 1200);
        } catch {
        }
    };

    return (
        <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4 items-start justify-between">
                <h2 className="font-bold tracking-tight">Stack Cards</h2>
                <p className="text-foreground">
                    Displays a beautiful cards - simple, sleek.
                </p>
            </div>


            <div className='flex flex-col gap-4'>
                {/* Tabs */}
                <div className="flex items-center gap-4 text-sm">
                    <button
                        className={`font-medium cursor-pointer ${tab === 'preview' ? '' : 'text-foreground'}`}
                        onClick={() => setTab('preview')}
                    >
                        Preview
                    </button>
                    <button
                        className={`font-medium cursor-pointer ${tab === 'code' ? '' : 'text-foreground'}`}
                        onClick={() => setTab('code')}
                    >
                        Code
                    </button>
                </div>

                {/* Panel */}
                {tab === 'preview' ? (
                    <div className="rounded-lg border border-foreground max-w-[800px] h-[400px] min-h-[400px] max-h-[400px]">
                        <div className="relative h-[420px] w-full flex justify-center items-center">
                            <div className="">
                                <StackCard1 />
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="rounded-lg border border-foreground max-w-[800px] h-[400px] min-h-[400px] max-h-[400px] bg-secondary overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none][scrollbar-width:none]">
                        <div className="flex items-center justify-between border-b border-foreground px-3 py-2">
                            <span className="text-xs font-medium text-foreground">stackcard.jsx</span>
                            <button
                                type="button"
                                onClick={copy}
                                className="rounded-lg border cursor-pointer border-foreground bg-secondary px-2 py-1 text-xs font-semibold hover:opacity-70 active:translate-y-[1px] dark:bg-[var(--bg)] dark:text-[var(--fg)]"
                            >
                                {copied ? 'Copied!' : 'Copy'}
                            </button>
                        </div>
                        <pre className="max-w-[800px] overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none][scrollbar-width:none] p-3 text-sm dark:bg-[var(--bg)] dark:text-[var(--fg)]">
                            <code>{code}</code>
                        </pre>
                    </div>
                )}
            </div>
        </div>

    );
}

function StackCard1() {
    return (
            <div className='p-2 flex flex-col gap-2 bg-[var(--fg)] rounded-xl max-w-[270px]'>
                <span className='px-2 py-6 flex flex-col bg-blue-300 gap-6 rounded-xl'>
                    <span className='flex flex-col gap-1'>
                    <h3 className='font-semibold '>Web Design</h3>
                    <p >Crafs engaging, user friendly websites.</p>
                    </span>
                    <span className='grid grid-cols-2 gap-1'>
                        <p className='px-1 bg-blue-400  rounded-full text-center font-medium'>Landing Page</p>
                        <p className='px-1 bg-blue-400 rounded-full text-center font-medium'>Website</p>
                        <p className='px-1 bg-blue-400 rounded-full text-center font-medium'>One Page</p>
                    </span>
                </span>
                <span  className='px-2 flex flex-row justify-between'>
                    <p className='text-[var(--bg)] text-xl font-medium'>Explore</p>
                     <p className='text-[var(--bg)] text-xl font-medium cursor-pointer hover:scale-120'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className='fill-[var(--bg)]'><path d="M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z"/></svg>
                     </p>
                </span>
            </div>
    )
}