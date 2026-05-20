import { Sparkles, X } from 'lucide-react'
import { motion } from 'motion/react'

const LoginModel = ({open, onClose}) => {
    return (
        <div>
            {open && (
                <motion.div
                    className='fixed inset-0 flex z-100 items-center justify-center bg-black/80 backdrop-blur-xl px-4'
                >
                    <motion.div
                        className='relative w-full max-w-md p-px rounded-3xl bg-linear-to-br from-purple-500/20 via-blue-500/30  t0-transparent'
                    >
                        <div className='relative rounded-3xl bg-[#0b0b0b] border border-white/10 shadow-[0_30px_120px_rgba(0,0,0,0,0.8)] overflow-hidden'>

                            {/* glow background */}
                            <motion.div
                                className='absolute -top-32 -left-32 w-80 h-80 bg-purple-500/30 blur-[140px]'
                            />
                            <motion.div
                                className='absolute -bottom-32 -right-32 w-80 h-80 bg-blue-500/25 blur-[140px]'
                            />

                            <button
                            onClick={onClose}
                            className='absolute top-5 right-5 z-20 text-zinc-400 hover:text-white transition text-lg'><X /></button>

                            <div className="relative px-8 pt-14 pb-10 text-center">
                                <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-white/10 rounded-full bg-white/5 backdrop-blur">
                                    <Sparkles className='w-4 h-4 text-purple-400' />
                                    <span className='text-sm text-gray-300'>AI Website Builder</span>
                                </div>
                                <h2 className='text-3xl font-semibold leading-tight mb-3 space-x-2 text-white'>
                                    Welcome to{" "}
                                    <span className='bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>Nep AI</span>
                                </h2>
                                <motion.button
                                whileHover={{scale:1.04}}
                                whileTap={{scale:0.96}}
                                className='group relative w-full h-13 rounded-xl bg-white text-black font-semibold shadow-xl overflow-hidden'
                                >
                                    <div className='relative flex items-center justify-center gap-3'>
                                        <img className='h-5 w-5' src="https://static.vecteezy.com/system/resources/previews/046/861/647/non_2x/google-logo-transparent-background-free-png.png" alt="" />
                                        Continue with Google
                                    </div>

                                </motion.button>
                            </div>

                        </div>
                    </motion.div>

                </motion.div>
            )}
        </div>
    )
}

export default LoginModel