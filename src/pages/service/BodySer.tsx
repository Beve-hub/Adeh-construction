import IMG1 from "../../assets/const.jpg";
import IMG2 from "../../assets/drawing2.jpeg";
import IMG3 from "../../assets/estatemanage.jpg";
import IMG4 from "../../assets/consultant.jpg";
import IMG5 from "../../assets/mnagement.jpeg";

const BodySer = () => {
    return (
        <div className="bg-[--text-extra] gird gap-6  justify-between ">
            <div className="grid gap-6 md:grid-cols-2 items-center">
                {/* Text container with improved responsiveness */}
                <div className="w-full max-w-2xl flex flex-col justify-center items-center p-4 text-center md:text-left">
                    <div className="max-w-lg">
                        <h1 className="text-[--text-heading] font-bold text-2xl sm:text-3xl md:text-4xl mb-4">
                            Building Construction
                        </h1>
                        <p className="text-sm sm:text-base md:text-lg mb-4">
                            As part of the services provided by construction companies, Dutum deals with the design, construction, and maintenance of the physical and naturally built environment, including public works such as roads, bridges, canals, dams, airports, sewerage systems, pipelines, structural components of buildings, and railways.
                        </p>
                    </div>
                </div>
                
                {/* Image container with full responsiveness */}
                <img src={IMG1} alt="Civil Engineering" className="object-cover w-full h-full " />
            </div>
            <div className="grid gap-6 md:grid-cols-2 items-center">
                {/* Image container with full responsiveness */}
                <img src={IMG2} alt="Civil Engineering" className="object-cover w-full h-full " />


                {/* Text container with improved responsiveness */}
                <div className="w-full max-w-2xl flex flex-col justify-center items-center p-4 text-center md:text-left">
                    <div className="max-w-lg">
                        <h1 className="text-[--text-heading] font-bold text-2xl sm:text-3xl md:text-4xl mb-4">
                            Building Design
                        </h1>
                        <p className="text-sm sm:text-base md:text-lg mb-4">
                            As part of the services provided by construction companies, Dutum deals with the design, construction, and maintenance of the physical and naturally built environment, including public works such as roads, bridges, canals, dams, airports, sewerage systems, pipelines, structural components of buildings, and railways.
                        </p>
                    </div>
                </div>
                
                
            </div>
            <div className="grid gap-6 md:grid-cols-2 items-center">
                
                {/* Text container with improved responsiveness */}
                <div className="w-full max-w-2xl flex flex-col justify-center items-center p-4 text-center md:text-left">
                    <div className="max-w-lg">
                        <h1 className="text-[--text-heading] font-bold text-2xl sm:text-3xl md:text-4xl mb-4">
                            Estate management
                        </h1>
                        <p className="text-sm sm:text-base md:text-lg mb-4">
                            As part of the services provided by construction companies, Dutum deals with the design, construction, and maintenance of the physical and naturally built environment, including public works such as roads, bridges, canals, dams, airports, sewerage systems, pipelines, structural components of buildings, and railways.
                        </p>
                    </div>
                </div>
                
                {/* Image container with full responsiveness */}
                <img src={IMG3} alt="Civil Engineering" className="object-cover w-full h-full " />
            </div>
            <div className="grid gap-6 md:grid-cols-2 items-center">
                {/* Image container with full responsiveness */}
                <img src={IMG4} alt="Civil Engineering" className="object-cover w-full h-full " />
                {/* Text container with improved responsiveness */}
                <div className="w-full max-w-2xl flex flex-col justify-center items-center p-4 text-center md:text-left">
                    <div className="max-w-lg">
                        <h1 className="text-[--text-heading] font-bold text-2xl sm:text-3xl md:text-4xl mb-4">
                            Estate Consultant
                        </h1>
                        <p className="text-sm sm:text-base md:text-lg mb-4">
                            As part of the services provided by construction companies, Dutum deals with the design, construction, and maintenance of the physical and naturally built environment, including public works such as roads, bridges, canals, dams, airports, sewerage systems, pipelines, structural components of buildings, and railways.
                        </p>
                    </div>
                </div>
                
                
            </div>
            <div className="grid gap-6 md:grid-cols-2 items-center">
                
                {/* Text container with improved responsiveness */}
                <div className="w-full max-w-2xl flex flex-col justify-center items-center p-4 text-center md:text-left">
                    <div className="max-w-lg">
                        <h1 className="text-[--text-heading] font-bold text-2xl sm:text-3xl md:text-4xl mb-4">
                            Project Management
                        </h1>
                        <p className="text-sm sm:text-base md:text-lg mb-4">
                            As part of the services provided by construction companies, Dutum deals with the design, construction, and maintenance of the physical and naturally built environment, including public works such as roads, bridges, canals, dams, airports, sewerage systems, pipelines, structural components of buildings, and railways.
                        </p>
                    </div>
                </div>
                
                {/* Image container with full responsiveness */}
                <img src={IMG5} alt="Civil Engineering" className="object-cover w-full h-full " />
            </div>
        </div>
    );
};

export default BodySer;
