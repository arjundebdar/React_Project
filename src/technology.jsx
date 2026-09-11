import { useState, useEffect } from "react"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Technology() {
    const [technologyes, setTechnologyes] = useState([])
    const [selectedTechnologies, setSelectedTechnologies] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch("./data.json")
            .then(res => res.json())
            .then(data => {
                setTimeout(() => {
                    setTechnologyes(data)
                     setLoading(false)
                }, 1000)
            }).catch((error) => {
                setLoading(false)
            })
    }, [])
    //Add to Stack
    const handleAddToStack = (technology) => {
        const alreadyAdd = selectedTechnologies.some(
            item => item.id === technology.id
        )
        if (alreadyAdd) {
            toast.warning(`${technology.name} is already added to your stack!`);
            return;
        }
        setSelectedTechnologies([
            ...selectedTechnologies,
            technology
        ])
        toast.success(`${technology.name} added to your stack!`)
    }
    // Remove Stuck
    const handleRemove = (id) => {
        const remove = selectedTechnologies.find(
            technology => technology.id === id
        )
        const remaing = selectedTechnologies.filter(
            technologye =>technologye.id !== id
        )
        setSelectedTechnologies(remaing);
        if (remove) {
            toast.info(`${remove.name} removed from your stack!`);
        }
    }
    // Remove all
    const handleRemoveAll = () => {
        setSelectedTechnologies([])
        toast.success("All technologies removed from your stack!");
    }

    
    return (
        <>
            <section className="w-full bg-white py-10">
                <div className="mx-auto max-w-[1110px] px-6">
                    <div className="mb-10">
                        <h2 className="text-3xl font-extrabold text-slate-900">Explore the <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">Technologies</span> </h2>
                        <p className="mt-2 text-[30px] text-slate-500">Pick one technology per category to build your ideal stack.</p>
                    </div>
                    {/* Cards + Your Stack */}
                    {loading ? (
                        <div className="flex min-h-[300px] items-center justify-center"> 
                            <div className="text-center">
                                <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-white border-t-blue-500">
                                </div>
                                    <p className="mt-4 text-gray-600">Loading</p>
                            </div>
                        </div>
                    ): (
                        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_270px]">
                        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                            {technologyes.map((technology) => {
                                const isAdded = selectedTechnologies.some(
                                    item => item.id === technology.id
                                )
                                return (
                                    <div key={technology.id} className="flex min-h-[260px] flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300">
                                        <div className="flex items-center justify-between">
                                            <img src={technology.icon} alt={technology.name} className="h-10 w-10 object-contain" />
                                            <span className="rounded-full bg-sky-100 border-sky-50 px-3 py-1 text-[15px] font-medium text-sky-800">{ technology.badge}</span>
                                        </div>
                                        <h3 className="mt-5 text-lg font-bold text-slate-800">{technology.name}</h3>
                                        <p className="mt-2 text-sm lending-5 text-slate-500">{technology.description}</p>
                                        <div className="flex justify-between items-center pt-5 mt-auto">
                                            <span className="rounded bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600">
                                                {technology.category}
                                            </span>
                                            <span className="text-xs text-slate-600">
                                                {technology.difficulty}
                                            </span>
                                            <span className="flex items-center gap-1 text-xs font-medium text-slate-600">
                                                <span className="text-yellow-500">★</span>
                                                {technology.rating }
                                            </span>
                                        </div>
                                        <button onClick={() => handleAddToStack(technology)} className={`mt-4 w-full cursor-pointer rounded-lg py-2.5 text-sm font-medium transition ${
                                            isAdded ? "bg-green-600 text-white" : "bg-slate-950 text-white "
                                            } `}>{isAdded ? "✓ Added to Stack" : "Add to Stack"} </button>
                                    </div>
                                )
                            })}
                        </div>
                            {/* ================= Your Stack ================= */}
                        <div className="h-fit rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                            <h2 className="text-2xl font-bold text-slate-600 ">Your Stack</h2>
                            <p>
                                {selectedTechnologies.length} Technology
                                 {selectedTechnologies.length >= 1 && " "+  "Selected"}
                            </p>
                            { /*Empty State */}
                            { 
                                selectedTechnologies.length === 0 && (
                                    <div className="mt-5 flex h-[100px] items-center justify-center rounded-xl border border-dashed border-slate-200">
                                        <p className="text-sm text-slate-400">Your Stack is Empty!</p>
                                    </div>
                                )
                            }
                            {/** Selected Technologies */}
                            {selectedTechnologies.length > 0 && (
                                <div className="flex min-h-[20px] flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                                    {selectedTechnologies.map((technology) => (
                                        <div key={technology.id} className="flex items-center justify-between rounded-xl border border-slate-200 p-3">
                                            <div className="flex items-center gap-3">
                                                <img src={technology.icon} alt={technology.name} className="h-9 w-9 object-contain" />
                                                <div>
                                                    <h3 className="text-sm font-semibold text-slate-800 ">{technology.name}</h3>
                                                    <p className="text-xs text-slate-500 font-semibold">{technology.category }</p>
                                                </div>
                                            </div>
                                            { /**Remove Btn */}
                                            <button onClick={() => handleRemove(technology.id)} className="text-red-500 cursor-pointer">
                                                X
                                            </button>
                                        </div>
                                    ))}
                                    {/**Remove All */}
                                    <button onClick={() => handleRemoveAll()} className="mt-5 border-slate-500 rounded-2xl bg-red-700 p-2 font-medium text-white cursor-pointer ">
                                        Remove All
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                    )}
                </div>
            </section>
            <ToastContainer
                position="bottom-right"
            />
        </>
    )
}