import React, { useState, useRef, useEffect } from 'react';
import Transition from '../utils/Transition';

import FeaturesBg from '../images/features-bg.png';
import FeaturesElement from '../images/features-element.png';

function Features() {

  const [tab, setTab] = useState(1);

  const tabs = useRef(null);

  const heightFix = () => {
    if (tabs.current.children[tab]) {
      tabs.current.style.height = tabs.current.children[tab - 1].offsetHeight + 'px'
    }
  }

  useEffect(() => {
    heightFix()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab])

  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">

          {/* Section header */}
          <div className="max-w-6xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">About Us</h1>
            <p className="text-xl text-gray-600">Ocean Pearl Risk Solutions provides customers with solutions and tools that combine public and industry specific content with advanced technology and analytics to assist them in evaluating and predicting risk and enhancing operational efficiency.</p>
            <br></br>
            <p className="text-xl text-gray-600">Our goal is to help entities identify, combat, and reduce the amount of fraud and financial crime being committed against their businesses, products, and services.</p>
            <br></br>
            <p className="text-xl text-gray-600">We use the power of data, AI, and Machine Learning to help our customers make better, timelier decisions. Our innovative solutions enable organizations to audit and manage risks like identity theft, fraud, money laundering, terrorist financing, and cybercrime.</p>
          </div>

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">

            {/* Content */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6" data-aos="fade-right">
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                <h3 className="h3 mb-3">Solutions</h3>
                <p className="text-xl text-gray-600">We help manage different types of risk depending on your needs:</p>
              </div>
              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0">
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 1 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(1); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">AML & Compliance</div>
                    <div className="text-gray-600">AI that transforms Anti-Money Laundering/CFT while ensuring regulatory compliance</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-shield-lock-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm0 5a1.5 1.5 0 0 1 .5 2.915l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99A1.5 1.5 0 0 1 8 5z"/>
                  </svg>
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 2 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(2); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">Payments Fraud</div>
                    <div className="text-gray-600">Leverage the power of AI to reduce transaction-level fraud and merchant risk</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-fingerprint" viewBox="0 0 16 16">
                    <path d="M8.06 6.5a.5.5 0 0 1 .5.5v.776a11.5 11.5 0 0 1-.552 3.519l-1.331 4.14a.5.5 0 0 1-.952-.305l1.33-4.141a10.5 10.5 0 0 0 .504-3.213V7a.5.5 0 0 1 .5-.5Z"/>
                    <path d="M6.06 7a2 2 0 1 1 4 0 .5.5 0 1 1-1 0 1 1 0 1 0-2 0v.332c0 .409-.022.816-.066 1.221A.5.5 0 0 1 6 8.447c.04-.37.06-.742.06-1.115V7Zm3.509 1a.5.5 0 0 1 .487.513 11.5 11.5 0 0 1-.587 3.339l-1.266 3.8a.5.5 0 0 1-.949-.317l1.267-3.8a10.5 10.5 0 0 0 .535-3.048A.5.5 0 0 1 9.569 8Zm-3.356 2.115a.5.5 0 0 1 .33.626L5.24 14.939a.5.5 0 1 1-.955-.296l1.303-4.199a.5.5 0 0 1 .625-.329Z"/>
                    <path d="M4.759 5.833A3.501 3.501 0 0 1 11.559 7a.5.5 0 0 1-1 0 2.5 2.5 0 0 0-4.857-.833.5.5 0 1 1-.943-.334Zm.3 1.67a.5.5 0 0 1 .449.546 10.72 10.72 0 0 1-.4 2.031l-1.222 4.072a.5.5 0 1 1-.958-.287L4.15 9.793a9.72 9.72 0 0 0 .363-1.842.5.5 0 0 1 .546-.449Zm6 .647a.5.5 0 0 1 .5.5c0 1.28-.213 2.552-.632 3.762l-1.09 3.145a.5.5 0 0 1-.944-.327l1.089-3.145c.382-1.105.578-2.266.578-3.435a.5.5 0 0 1 .5-.5Z"/>
                    <path d="M3.902 4.222a4.996 4.996 0 0 1 5.202-2.113.5.5 0 0 1-.208.979 3.996 3.996 0 0 0-4.163 1.69.5.5 0 0 1-.831-.556Zm6.72-.955a.5.5 0 0 1 .705-.052A4.99 4.99 0 0 1 13.059 7v1.5a.5.5 0 1 1-1 0V7a3.99 3.99 0 0 0-1.386-3.028.5.5 0 0 1-.051-.705ZM3.68 5.842a.5.5 0 0 1 .422.568c-.029.192-.044.39-.044.59 0 .71-.1 1.417-.298 2.1l-1.14 3.923a.5.5 0 1 1-.96-.279L2.8 8.821A6.531 6.531 0 0 0 3.058 7c0-.25.019-.496.054-.736a.5.5 0 0 1 .568-.422Zm8.882 3.66a.5.5 0 0 1 .456.54c-.084 1-.298 1.986-.64 2.934l-.744 2.068a.5.5 0 0 1-.941-.338l.745-2.07a10.51 10.51 0 0 0 .584-2.678.5.5 0 0 1 .54-.456Z"/>
                    <path d="M4.81 1.37A6.5 6.5 0 0 1 14.56 7a.5.5 0 1 1-1 0 5.5 5.5 0 0 0-8.25-4.765.5.5 0 0 1-.5-.865Zm-.89 1.257a.5.5 0 0 1 .04.706A5.478 5.478 0 0 0 2.56 7a.5.5 0 0 1-1 0c0-1.664.626-3.184 1.655-4.333a.5.5 0 0 1 .706-.04ZM1.915 8.02a.5.5 0 0 1 .346.616l-.779 2.767a.5.5 0 1 1-.962-.27l.778-2.767a.5.5 0 0 1 .617-.346Zm12.15.481a.5.5 0 0 1 .49.51c-.03 1.499-.161 3.025-.727 4.533l-.07.187a.5.5 0 0 1-.936-.351l.07-.187c.506-1.35.634-2.74.663-4.202a.5.5 0 0 1 .51-.49Z"/>
                  </svg>
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 3 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(3); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">Identity & Digital Fraud</div>
                    <div className="text-gray-600">AI that detects and prevents Digital-channel fraud in a digital world</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-file-earmark-bar-graph-fill" viewBox="0 0 16 16">
                    <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zm.5 10v-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-2.5.5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1zm-3 0a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-1z"/>
                  </svg>
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 4 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(4); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">Credit Risk</div>
                    <div className="text-gray-600">Proactively manage credit risk across the customer lifecycle with AI</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-credit-card-2-back-fill" viewBox="0 0 16 16">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5H0V4zm11.5 1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-2zM0 11v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1H0z"/>
                  </svg>
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 5 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(5); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">Audit</div>
                    <div className="text-gray-600">Internal Auditing can be transformed with AI and machine learning leading to increased productivity and accuracy</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-binoculars-fill" viewBox="0 0 16 16">
                    <path d="M4.5 1A1.5 1.5 0 0 0 3 2.5V3h4v-.5A1.5 1.5 0 0 0 5.5 1h-1zM7 4v1h2V4h4v.882a.5.5 0 0 0 .276.447l.895.447A1.5 1.5 0 0 1 15 7.118V13H9v-1.5a.5.5 0 0 1 .146-.354l.854-.853V9.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v.793l.854.853A.5.5 0 0 1 7 11.5V13H1V7.118a1.5 1.5 0 0 1 .83-1.342l.894-.447A.5.5 0 0 0 3 4.882V4h4zM1 14v.5A1.5 1.5 0 0 0 2.5 16h3A1.5 1.5 0 0 0 7 14.5V14H1zm8 0v.5a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5V14H9zm4-11H9v-.5A1.5 1.5 0 0 1 10.5 1h1A1.5 1.5 0 0 1 13 2.5V3z"/>
                  </svg>
                  </div>
                </a>
              </div>
            </div>

            {/* Tabs items */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="zoom-y-out" ref={tabs}>
              <div className="relative flex flex-col text-center lg:text-right">
                {/* Item 1 */}
                <Transition
                  show={tab === 1}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                  <div class=" bg-white flex">
                    <div class="mb-8 mt-8 ml-4 mr-4 text-left">
                    <div class="text-gray-900 text-xl mb-2">The estimated amount of global money laundering is <span style={{'color': 'orange'}}>US$2 trillion</span> a year. That’s  roughly equivalent to <span style={{'color': 'purple'}}>5% of the World’s GDP </span>(annual gross domestic product)</div>
                      <p class="text-black text-lg">Anti-money laundering (AML)/CFT compliance can be extremely complex for global organizations; countries have their own regulations and unique sanctions laws.</p>
                      <div class="text-gray-900 font-bold text-lg">Anti-Money Laundering/CFT</div>
                      <ul>
                        <li><p class="text-black text-lg">•	Take a risk-based approach to monitoring transactions for money laundering and terrorist financing activities.</p></li>
                        <li><p class="text-black text-lg">•	Performs intelligent customer segmentation, entity resolution and scenario threshold tuning with above-the-line/below-the-line testing to generate more productive alerts, identify “true positives” and optimize overall transaction monitoring processes.</p></li>
                        <li><p class="text-black text-lg">•	CDD -Rate new customers and update existing customer scores based on key events and new information.</p></li>
                        <li><p class="text-black text-lg">•	Take a risk-based approach using hybrid analytics to manage alerts, test scenarios, respond faster to evolving risks and comply with regulations.</p></li>
                      </ul>
                      </div>
                    </div>
                  </div>
                </Transition>
                {/* Item 2 */}
                <Transition
                  show={tab === 2}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                  <div class=" bg-white flex">
                    <div class="mb-8 mt-8 ml-4 mr-4 text-left">
                    <div class="text-gray-900 text-xl mb-2">It’s estimated losses will surpass <span style={{'color': 'purple'}}>US$48 billion</span> by 2023. Financial institutions generally use <span style={{'color': 'orange'}}>rules-based fraud detection systems</span>, typically receiving high rates of false positives.</div>
                      <p class="text-black text-lg">In the past five years payment fraud activity has increased dramatically.</p>
                      <ul>
                        <li><p class="text-black text-lg">•	Find fraud early through embedded machine learning capabilities that adapt to changes in customer transactions and behavior.</p></li>
                        <li><p class="text-black text-lg">•	Find more fraud and reduce false positives,using a AI and machine learning techniques.</p></li>
                        <li><p class="text-black text-lg">•	Reduce fraud losses, increase revenue and enhance your operational efficiency.</p></li>
                      </ul>
                      </div>
                    </div>
                  </div>
                </Transition>
                {/* Item 3 */}
                <Transition
                  show={tab === 3}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                  <div class=" bg-white flex">
                    <div class="mb-8 mt-8 ml-4 mr-4 text-left">
                    <div class="text-gray-900 text-xl mb-2">With over <span style={{'color': 'purple'}}>50%</span> of consumers using mobile devices to shop, growing digital fraud is putting more acquirers, merchants and financial institutions at risk.</div>
                      <p class="text-black text-lg">As the digital role in commerce grows, so does the potential for cross-channel fraud.</p>
                      <ul>
                        <li><p class="text-black text-lg">•	Detect and adapt to new identity fraud trends in real time.</p></li>
                        <li><p class="text-black text-lg">•	Reduce false positives with layered analytic methods.</p></li>
                        <li><p class="text-black text-lg">•	Adopting detection strategies powered by analytics can include rules, anomaly detection, machine learning and other statistical approaches. By combining methods, you can identify good customers faster, minimizing identity fraud risk while reducing false positives.</p></li>
                      </ul>
                      </div>
                    </div>
                  </div>
                </Transition>

                <Transition
                  show={tab === 4}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                  <div class=" bg-white flex">
                    <div class="mb-8 mt-8 ml-4 mr-4 text-left">
                      <div class="text-gray-900 text-xl mb-2">As debt levels grow, lenders need greater accuracy when screening for credit risk driving the need to go beyond traditional portfolio analysis, using a more proactive approach.</div>
                      <div class="text-gray-900 font-bold text-lg">Credit risk at origination</div>
                      <ul>
                        <li><p class="text-black text-lg">•	Assess credit risk for new customers</p></li>
                        <li><p class="text-black text-lg">•	Enable more informed underwriting</p></li>
                        <li><p class="text-black text-lg">•	Make better and fast lending decisions</p></li>
                      </ul>
                      <br></br>
                      <div class="text-gray-900 font-bold text-lg">Credit delinquency and portfolio management</div>
                      <ul>
                        <li><p class="text-black text-lg">•	Detect early warning signs of potential delinquency</p></li>
                        <li><p class="text-black text-lg">•	Reward good customers</p></li>
                        <li><p class="text-black text-lg">•	Develop personalized strategies at a customer level</p></li>
                      </ul>
                      </div>
                    </div>
                  </div>
                </Transition>

                <Transition
                  show={tab === 5}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                  <div class=" bg-white flex">
                    <div class="mb-8 mt-8 ml-4 mr-4 text-left">
                    <div class="text-gray-900 text-xl mb-2"h>This manual approach has made auditing a resource-intensive and time-consuming process. The tedious nature of the job often results in auditors reviewing less each day even as business complexity increases.</div>
                    <div class="text-gray-900 text-lg mb-2">Auditing today relies on the statistical sampling to review hundreds of documents/transactions, judgment, and experience of auditors to manually verify evidence, identify areas of weakness, and conduct in-depth reviews of organizational procedures and transactions.</div>
                      <div class="text-gray-900 text-lg mb-2">AI and Machine Learning can automatically process large volumes of data to identify anomalies and high-risk transactions which can be further analyzed by humans.</div>
                      <div class="text-gray-900 text-lg mb-2">What are the benefits?</div>
                      <ul>
                        <li><p class="text-black text-lg">•	The workload of auditors is reduced since there is no need to go-back-forth for asking questions to the client.</p></li>
                        <li><p class="text-black text-lg">•	Cost reduction: Use of AI reduces the cost involved in manual hours of research and analysis.</p></li>
                        <li><p class="text-black text-lg">•	Audit Quality: AI systems continuously learn and adapt to datasets so that they can improve anomaly detection accuracy as more data is processed. Therefore, use of AI/machine learning increases the audit quality.</p></li>
                      </ul>
                      </div>
                    </div>
                  </div>
                </Transition>
              </div>
            </div >

          </div >

        </div >
      </div >
    </section >
  );
}

export default Features;
