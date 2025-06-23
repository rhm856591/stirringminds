import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@radix-ui/react-accordion';
import React from 'react'

const plans = [
    {
        label: 'CAREER REPORT',
        oldPrice: '1,999',
        discount: '50% off',
        price: '999',
        features: [
            { icon: '▶️', text: '1 PSYCHOMETRIC CAREER TEST' },
            { icon: '▶️', text: '1 PSYCHOMETRIC CAREER REPORT' },
            { icon: '▶️', text: 'E-BOOK SELF CAREER COUNSELLING' },
        ],
        button: 'GET STARTED »',
        highlight: false,
    },
    {
        label: 'RECOMMENDED PLAN',
        oldPrice: '5,999',
        discount: '16% off',
        price: '4,999',
        features: [
            { icon: '▶️', text: '2 PSYCHOMETRIC CAREER TEST' },
            { icon: '▶️', text: '2 PSYCHOMETRIC CAREER REPORT' },
            { icon: '▶️', text: '1 VIDEO CAREER COUNSELLING SESSION' },
            { icon: '▶️', text: 'PERSONALISED ROADMAP' },
            { icon: '▶️', text: 'E-BOOK SELF CAREER COUNSELLING' },
            { icon: '▶️', text: 'E-BOOK NEW AGE CAREERS' },
        ],
        button: 'GET STARTED »',
        highlight: false,
    },
    {
        label: 'OUR MOST POPULAR CAREER PLAN',
        oldPrice: '12,999',
        discount: '24% off',
        price: '9,999',
        features: [
            { icon: '▶️', text: '3 PSYCHOMETRIC CAREER TEST' },
            { icon: '▶️', text: '3 PSYCHOMETRIC CAREER REPORT' },
            { icon: '▶️', text: '3 VIDEO CAREER COUNSELLING SESSION' },
            { icon: '▶️', text: 'E-BOOK SELF CAREER COUNSELLING' },
            { icon: '▶️', text: 'E-BOOK NEW AGE CAREERS' },
            { icon: '▶️', text: 'E-BOOK NEW AGE TECHNOLOGY' },
            { icon: '▶️', text: 'E-BOOK DIGITAL CAREER' },
        ],
        button: 'GET STARTED »',
        highlight: true,
    },
]

const accordionItems = [
    {
        id: 1,
        title: 'At what point in my academic or professional journey should I consider career counselling/career guidance?',
        content: `The best time to start career counselling/career guidance is early in your academic journey, especially during your student years - both in school as well as college. Initiating career counselling/career guidance at this stage helps you explore things in an organized way, giving you a clear understanding of your career goals with respect to career selection, entrance exams, college admissions and higher education.

However, we emphasize that career counselling/career guidance is beneficial at any stage of life especially in the life of working professionals where it can help in charting career growth plans. No matter if you're still in school or done with studies or an experienced working professional, it's always okay to ask for help from experts and make smart choices about your career. We're here to support you at every step of your journey.`,
    },
    {
        id: 2,
        title: 'Shipping Details',
        content: 'We offer worldwide shipping through trusted courier partners. Standard delivery takes 3-5 business days, while express shipping ensures delivery within 1-2 business days. All orders are carefully packaged and fully insured. Track your shipment in real-time through our dedicated tracking portal.',
    },
    {
        id: 3,
        title: 'Return Policy',
        content: 'We stand behind our products with a comprehensive 30-day return policy. If you\'re not completely satisfied, simply return the item in its original condition. Our hassle-free return process includes free return shipping and full refunds processed within 48 hours of receiving the returned item.',
    },
]

const PriceSection = () => {
    return (
        <main className="">
            <section className="max-w-7xl mx-auto py-20 md:py-16">
                <div className="w-full flex flex-row items-center justify-between mb-8 gap-4 relative py-16">
                    <div className="absolute left-[0%] md:left-[26%] flex-1 flex flex-col items-center justify-center" style={{ height: '134px' }}>
                        <h1 className="uppercase font-bold text-[#3F4449] text-[35px] mb-1 text-center">SCIENTIFICALLY PLAN YOUR CAREER</h1>
                        <p className="font-bold text-[18px] text-[#5B6873] text-center mb-6">FOR SCHOOL/COLLEGE STUDENTS &amp; WORKING PROFESSIONALS</p>
                        <div className="w-16 h-1 bg-[#2ed0e7] rounded mx-auto" />
                    </div>
                    <div className="absolute hidden md:block right-0 flex-shrink-0 items-center justify-center h-[134px]">
                        <img src="https://www.careerguide.com/images-mcg/award-best-career-guidance.png" alt="award" className="max-h-full" />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 mt-8 py-8">
                    {plans.map((plan, idx) => {
                        const highlightStyles = plan.highlight
                            ? 'bg-[#31C5D2] border-[#2ed0e7] text-white scale-105 z-10 shadow-2xl md:-my-6 md:min-h-[540px] md:max-w-[370px]'
                            : 'border-[#2ed0e7] bg-white';
                        const cardSize = plan.highlight
                            ? 'md:min-w-[340px] md:max-w-[370px] min-w-[280px]'
                            : 'md:min-w-[300px] md:max-w-[330px] min-w-[260px]';
                        return (
                            <div
                                key={plan.label}
                                className={`flex-1 rounded-lg shadow-lg border-2 p-6 flex flex-col items-center transition-transform duration-200 ${highlightStyles} ${cardSize}`}
                                style={{}}
                            >
                                <div className="w-full flex flex-col items-center mb-2">
                                    <span className={`uppercase text-xs font-bold mb-2 ${plan.highlight ? 'bg-white text-black px-4 py-2 rounded-lg' : 'text-black bg-[#2ed0e7] px-4 py-2 rounded-lg'}`}>{plan.label}</span>
                                    <div className="flex flex-col items-center mb-2">
                                        <span className={`text-2xl md:text-3xl font-bold ${plan.highlight ? 'text-white' : 'text-[#3f444a]'}`}
                                            style={{ textDecoration: 'line-through', opacity: 0.6 }}>
                                            {plan.oldPrice}₹
                                        </span>
                                        <span className="text-red-500 font-bold text-lg">{plan.discount}</span>
                                    </div>
                                    <div className={`bg-[#2ed0e7] rounded-lg px-8 py-2 text-3xl font-bold mb-4 ${plan.highlight ? 'bg-white text-[#2ed0e7]' : 'text-white'}`}>{plan.price}₹</div>
                                </div>
                                <ul className="w-full mb-6">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className={`flex items-center gap-2 py-1 border-b border-black/20 last:border-b-0 font-semibold ${plan.highlight ? 'text-white' : 'text-[#3f444a]'}`}
                                        >
                                            <span className="text-lg">{feature.icon}</span>
                                            <span className="text-[15px]">{feature.text}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button className={`mt-auto px-6 py-2 border-2 rounded bg-white font-bold text-lg shadow hover:bg-[#2ed0e7] hover:text-white transition ${plan.highlight ? 'border-white text-[#2ed0e7]' : 'border-[#2ed0e7] text-[#2ed0e7]'}`}>{plan.button}</button>
                                <div className="flex justify-center items-center mt-4">
                                    <img src="https://i.ibb.co/w0BJt1L/cg-logo.png" alt="logo" />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
            <section className="bg-[#F7F7F7] mx-auto py-16 px-4 md:px-28 flex flex-col md:flex-row items-center justify-between gap-8">
                {/* Video */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <div className="w-full max-w-xl aspect-video bg-black rounded-lg overflow-hidden">
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/igVKdmUTQoM?si=jH3rNzxNqz8CMiH8"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            className="w-full h-full"
                        ></iframe>
                    </div>
                </div>
                {/* Info Card */}
                <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full flex flex-col items-start">
                    <span className="bg-[#31C5D2] text-white text-xs font-bold px-4 py-2 rounded mb-4 uppercase tracking-wide">SCIENTIFICALLY PLAN YOUR CAREER</span>
                    <h2 className="text-[#3f444a] text-3xl font-extrabold mb-4 text-left">A CAREER COUNSELLOR CAN CHANGE YOUR LIFE</h2>
                    <p className="text-[#5c6873] text-base font-normal mb-8 text-left">
                        Investing in Career Guidance & Career counselling helps you understand yourself and your career options better, making it easier to make decisions. It also helps you learn more about the job market, be happier in your career, and succeed in the long run.
                    </p>
                    <button className="bg-[#F04A4A] hover:bg-[#d13b3b] text-white text-lg font-bold px-8 py-3 rounded shadow transition">VIEW PRICING</button>
                </div>
            </section>
            {/* News Logos Section */}
            <section className="w-full py-16">
                <div className="max-w-6xl mx-auto">
                    <h3 className="text-center uppercase font-bold text-2xl mb-8 tracking-wide">We Are in The News</h3>
                    <div className="relative overflow-x-hidden">
                        <div
                            className="flex space-x-8 animate-scroll-logos hover:[animation-play-state:paused]"
                            style={{ minWidth: '100%' }}
                        >
                            {[
                                '//dwq4lez4vhobf.cloudfront.net/indiatodaybeta.jpg',
                                '//dwq4lez4vhobf.cloudfront.net/toi.png',
                                '//dwq4lez4vhobf.cloudfront.net/The_economic_Times.jpg',
                                '//dwq4lez4vhobf.cloudfront.net/the-tribune.jpg',
                                '//dwq4lez4vhobf.cloudfront.net/tech-circle.jpg',
                                '//dwq4lez4vhobf.cloudfront.net/reliance-foundation.jpg',
                                '//dwq4lez4vhobf.cloudfront.net/amar-ujala.jpg',
                                'https://www.careerguide.com/career/wp-content/uploads/2024/03/cnbcnews-removebg-preview-1.png',
                                '//dwq4lez4vhobf.cloudfront.net/Rediff.png',
                                '//dwq4lez4vhobf.cloudfront.net/the-telegraph.jpg',
                                '//dwq4lez4vhobf.cloudfront.net/statesman.jpg',
                                '//dwq4lez4vhobf.cloudfront.net/YourStory.png',
                                'https://www.careerguide.com/career/wp-content/uploads/2024/03/dd-news-2.jpg',
                                '//dwq4lez4vhobf.cloudfront.net/indiatoday.jpg',
                                '//dwq4lez4vhobf.cloudfront.net/educationWorld.jpg',
                                'https://www.careerguide.com/career/wp-content/uploads/2024/03/rajya-sabha.jpg',
                                'images/huffington_logo.jpg',
                                'images/thss-1.png',
                                '//dwq4lez4vhobf.cloudfront.net/business-standard.png',
                            ].concat([
                                '//dwq4lez4vhobf.cloudfront.net/indiatodaybeta.jpg',
                                '//dwq4lez4vhobf.cloudfront.net/toi.png',
                                '//dwq4lez4vhobf.cloudfront.net/The_economic_Times.jpg',
                                '//dwq4lez4vhobf.cloudfront.net/the-tribune.jpg',
                                '//dwq4lez4vhobf.cloudfront.net/tech-circle.jpg',
                                '//dwq4lez4vhobf.cloudfront.net/reliance-foundation.jpg',
                                '//dwq4lez4vhobf.cloudfront.net/amar-ujala.jpg',
                                'https://www.careerguide.com/career/wp-content/uploads/2024/03/cnbcnews-removebg-preview-1.png',
                                '//dwq4lez4vhobf.cloudfront.net/Rediff.png',
                                '//dwq4lez4vhobf.cloudfront.net/the-telegraph.jpg',
                                '//dwq4lez4vhobf.cloudfront.net/statesman.jpg',
                                '//dwq4lez4vhobf.cloudfront.net/YourStory.png',
                                'https://www.careerguide.com/career/wp-content/uploads/2024/03/dd-news-2.jpg',
                                '//dwq4lez4vhobf.cloudfront.net/indiatoday.jpg',
                                '//dwq4lez4vhobf.cloudfront.net/educationWorld.jpg',
                                'https://www.careerguide.com/career/wp-content/uploads/2024/03/rajya-sabha.jpg',
                                'images/huffington_logo.jpg',
                                'images/thss-1.png',
                                '//dwq4lez4vhobf.cloudfront.net/business-standard.png',
                            ]) // duplicate for seamless loop
                                .map((src, i) => (
                                    <div key={i} className="flex-shrink-0 flex items-center justify-center" style={{ minWidth: 200 }}>
                                        <img
                                            src={src}
                                            alt="news logo"
                                            className="h-[50px] w-[200px] object-contain filter grayscale mx-auto"
                                            style={{ maxHeight: 120 }}
                                        />
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* faq */}
            <section className="bg-[#F7F7F7] mx-auto py-16 px-4 md:px-28">

                <div>
                    <div className='flex flex-col gap-4 md:gap-8'>
                        <div className='flex flex-col gap-4'>
                            <h1 className='text-2xl font-bold text-center'>Frequently Asked Questions</h1>
                            <p className='text-sm text-center'>What Users usually ask us.</p>
                        </div>
                    </div>
                    <div className='mt-8 md:mt-5'>
                        <Accordion
                            type="single"
                            collapsible
                            className="w-full"
                            defaultValue="item-1"
                        >
                            {
                                accordionItems.map((item, i) => (
                                    <AccordionItem key={i} value={`item-${item.id}`} className="mb-4">
                                        <AccordionTrigger className='w-full bg-[#2ed0e7] text-white text-lg font-bold px-8 py-3 rounded shadow transition'>{item.title}</AccordionTrigger>
                                        <AccordionContent className="flex flex-col gap-4 text-balance bg-white p-6 rounded-lg shadow-lg">
                                            <p>{item.content}</p>
                                        </AccordionContent>
                                    </AccordionItem>
                                ))
                            }
                        </Accordion>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default PriceSection
