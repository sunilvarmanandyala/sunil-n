
import React from 'react';
import AnimatedSection from './AnimatedSection';

const CalendarIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>;
const LocationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;

const EventHighlight: React.FC<{ title: string, children: React.ReactNode }> = ({ title, children }) => (
    <div className="text-center p-4">
        <div className="mb-3 flex justify-center">{children}</div>
        <h4 className="text-lg font-bold text-white">{title}</h4>
    </div>
);

const PreReleaseEvent: React.FC = () => {
    return (
        <section id="event" className="relative py-20 md:py-32 bg-brand-dark overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center bg-fixed"
                style={{ backgroundImage: "url('https://i.imgur.com/mR3e73h.jpeg')", opacity: 0.15 }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-brand-dark"></div>

            <AnimatedSection>
                <div className="container mx-auto px-6 relative z-10">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-gold text-center mb-4">
                        Pre-Release Extravaganza
                    </h2>
                    <p className="text-xl text-center text-gray-300 mb-12">
                        Join us for an unforgettable night in Seattle!
                    </p>

                    <div className="bg-black/40 backdrop-blur-md rounded-xl shadow-2xl p-8 md:p-12 border border-brand-gold/20">
                        <div className="grid md:grid-cols-5 gap-8 items-center">
                            <div className="md:col-span-3">
                                <h3 className="text-3xl font-bold text-white mb-6">Event Details</h3>
                                <div className="space-y-4 text-gray-200">
                                    <div className="flex items-start">
                                        <CalendarIcon />
                                        <div className="ml-4">
                                            <p className="font-bold text-xl">DEC 27TH, 2025</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <LocationIcon />
                                        <div className="ml-4">
                                            <p className="font-bold text-xl">The Angel of the Winds Arena</p>
                                            <p className="text-gray-400">Everett, WA 98201</p>
                                        </div>
                                    </div>
                                </div>
                                 <div className="mt-8 pt-8 border-t border-gray-700">
                                    <h3 className="text-2xl font-bold text-white mb-4">Highlights</h3>
                                    <div className="flex flex-wrap justify-around">
                                        <EventHighlight title="Safire Film Expo" >
                                            <img src="https://i.imgur.com/gK9pBjp.png" alt="Film Expo Icon" className="h-12"/>
                                        </EventHighlight>
                                        <EventHighlight title="Safire Business Expo">
                                            <img src="https://i.imgur.com/fA7gGqV.png" alt="Business Expo Icon" className="h-12"/>
                                        </EventHighlight>
                                        <EventHighlight title="Thaman Live in Concert">
                                            <img src="https://i.imgur.com/C5M4n2N.png" alt="Concert Icon" className="h-12"/>
                                        </EventHighlight>
                                    </div>
                                </div>
                            </div>
                            <div className="md:col-span-2 text-center">
                                <h4 className="font-bold text-white mb-2">SCAN TO EXPRESS INTEREST</h4>
                                <img src="https://i.imgur.com/pFXf4AU.png" alt="QR Code for event interest" className="w-48 h-48 mx-auto rounded-lg bg-white p-1"/>
                                <div className="mt-4 text-sm text-gray-400">
                                    <p className="font-bold text-white text-lg mb-2">FOR MORE DETAILS CALL</p>
                                    <p>SUHAAG: +1(618) 303-2554</p>
                                    <p>VINOD: +1(425) 533-3261</p>
                                    <p>RAM: +1(316) 200-8464</p>
                                    <p>NAREN: +1(281) 467-9010</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AnimatedSection>
        </section>
    );
};

export default PreReleaseEvent;