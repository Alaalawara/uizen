import { motion, AnimatePresence } from "framer-motion";
import Hovercard from "../components/cards/Hovercard";
import MotionOneText from '../components/texts/Motion-one'
import { Link } from "react-router-dom";

export default function Components() {

    return (
        <section>
            <div className="mx-auto px-3 py-3 rounded-3xl 2xl:container xl:w-[100%] lg:w-[98%] w-full lg:grid 2xl:grid-cols-[220px_minmax(0,1fr)] xl:grid-cols-[200px_minmax(0,1fr)] lg:grid-cols-[170px_minmax(0,1fr)] grid-cols-1 lg:gap-3 bg-white">

                {/* sidebar */}
                <aside className="h-full bg-[#dedede] rounded-3xl px-3 py-3">
                    <div className="sticky top-16 h-screen w-full pt-3">

                    </div>
                </aside>


                {/* components */}
                <div className="flex flex-col w-full gap-3 rounded-3xl">
                    <span className="bg-[#212121] rounded-3xl px-5 py-3">
                        <h3 className="text-white font-bold">Components</h3>
                        <p className="font-medium text-[#dedede]">Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.</p>
                    </span>

                    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-3 p-3 sm:grid-cols-2 lg:grid-cols-3 bg-[#dedede] rounded-3xl">
                        <Link to="/">
                        <Hovercard
                            title="Framer Motion Card"
                            description="Interactive card with tilt, hover lift, and smooth image zoom."
                            imageUrl="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop"
                            badge="New"
                            href="#"
                        />
                        </Link>
                        {/* <div>
                        <MotionOneText/>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
}



{/* <Hovercard
                    title="No Image Variant"
                    description="Works fine without media; layout remains constant."
                    badge="Pro"
                /> */}

{/* <Hovercard
    title="Composable Actions"
    description="Pass custom actions to render buttons or links."
    imageUrl="https://images.unsplash.com/photo-1496302662116-35cc4f36df92?q=80&w=1400&auto=format&fit=crop"
    actions={
        <>
            <button className="rounded-md bg-neutral-900 px-3 py-1.5 text-white text-sm hover:bg-neutral-800 cursor-pointer">
                Primary
            </button>
            <button className="rounded-md border px-3 py-1.5 text-sm hover:bg-neutral-50">
                Secondary
            </button>
        </>
    }
/> */}