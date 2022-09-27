import React from 'react'

import { motion } from 'framer-motion'

const Policy = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }} style={{ backgroundColor: "#ebeef5", paddingTop: '150px' }} className="pb-5">
            <div className="container">
                <div className="row">
                    <div
                        className="col-12 p-4"
                        style={{
                            backgroundColor: "white",
                            boxShadow: "0 2px 5px 0 rgb(0 0 0 / 5%)",
                            borderRadius: "5px",
                        }}
                    >
                        <h1 className="text-center">OUR POLICY</h1>
                        <div className="row">
                            <div
                                className="col-12 p-4"
                                style={{
                                    backgroundColor: "white",
                                    boxShadow: "0 2px 5px 0 rgb(0 0 0 / 5%)",
                                    borderRadius: "5px",
                                }}
                            >
                                <h3 style={{ textTransform: "uppercase" }} className="mb-3">
                                    Payment Methods:
                                </h3>
                                <p>Pay at ease with Hatly Stores, we provide you with convenient payment methods to choose from.</p>
                                <ul className="description" >
                                    <li>Cash on delivery</li>
                                    <li>Fawry</li>
                                    <li>Visa or Master Card via Fawry “3% Fawry Fees”</li>
                                </ul>
                                <h3 style={{ textTransform: "uppercase" }} className="mb-3">
                                    Delivery Methods:
                                </h3>
                                <ul className="description" >
                                    <li> To Doorstep</li>
                                    <li>Aramex Services </li>
                                </ul>
                                <h3 style={{ textTransform: "uppercase" }} className="mb-3">
                                    Cash on delivery Policy:
                                </h3>
                                <p className="description">
                                    “Shipped from abroad” is a statement that makes you feel it would take ages to be delivered, that’s what “Hatly Stores” changed by providing you with larger quantities of products to be ready for immediate purchase.
                                </p>
                                <p className="description">
                                    However, in case the customer requests a device that is not available in our warehouse, a deposit is made with a reasonable amount by one of the following methods, bearing in mind that the order would be requested on the same day that the deposit is paid.

                                </p>

                                <ul className="description">
                                    <li>Bank deposit</li>
                                    <li>Payment in our store</li>
                                    <li>Vodafone Cash, Etisalat cash or MobiCash</li>
                                </ul>

                                <h3 style={{ textTransform: "uppercase" }} className="mb-3">
                                    Pricing policy
                                </h3>
                                <p className="description">
                                    Please be aware that, in case that a product is not offered or given in our inventory, the prices listed on the website are approximations and are liable to change in accordance with the cost of delivering the device without informing the customer.
                                </p>
                                <p className="description">
                                    In case that the device is not delivered within 21 days, the customer has the right to receive their deposit back.
                                </p>
                                <h3 style={{ textTransform: "uppercase" }} className="mb-3">
                                    Return and Refund Policy:
                                </h3>
                                <p className="description">
                                    The replacement system for manufacturing defects is valid for all Hatly products that are currently in our warehouse or that are imported to the customer with a preorder request for a period of 3 months in order to fill your experience with all the elements of safety. We were the first company to apply the warranty to manufacturing defects to purchases made from abroad, and we are still working to develop that in order to satisfy our customer's needs.
                                </p>
                                <p className="description">
                                    In the event that the customer complains about the existence of manufacturing defects within the warranty period, the device shall be received from the customer by one of the following methods:
                                </p>

                                <p className="description">
                                    Shipping the item back through Aramex or a personal interview with us then the device would be examined inside our technical support center with our technicians, and in case it is proven that there is a manufacturing defect, the product would be replaced or the amount returned, in case there is no manufacturing defect, the item will be returned to the customer through the same method.
                                </p>
                                <p className="description">
                                    We in Hatly have the most qualified maintenance technicians and we promise to provide all spare parts for all devices in Hatly, we provide all hardware maintenance they need without referring to any other maintenance center Just contact us, and the device will be fully examined, the spare parts will be determined and the action will be taken as soon as possible.
                                </p>
                                <p className="description">
                                    Hatly store will NOT deal or provide any services or products to any of OFAC (Office of Foreign Assets Control) sanctions countries in accordance with the law of  Egypt.
                                </p>
                                <ul className="description">
                                    <li>Multiple transactions may result in multiple postings to the cardholder’s monthly statement.</li>
                                    <li>Refund and Cancellation Policy – The following statement to be added on this section is as follows:</li>
                                    <li>Refunds will be done only through the Original Mode of Payment.
                                    </li>
                                </ul>
                                <h3 style={{ textTransform: "uppercase" }} className="mb-3">
                                    Privacy Policy:

                                </h3>
                                <p className="description">
                                    This Privacy Policy describes Our policies and procedures on the collection, use, and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
                                </p>
                                <p className="description">
                                    We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. This Privacy Policy has been created with the help of the Privacy Policy Generator.
                                </p>
                                <h3>
                                    Interpretation and Definitions
                                    Interpretation
                                </h3>
                                <p className="description">The words in which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in the plural.
                                </p>
                                <h3>Definitions</h3>
                                <p>For the purposes of this Privacy Policy:</p>
                                <ul className="description">
                                    <li>Account means a unique account created for You to access our Service or parts of our Service.</li>
                                    <li>Company (referred to as either “the Company”, “We”, “Us” or “Our” in this Agreement) refers to Hatly Store, El-moltaqa towers – Tower B – 3rd floor – Apt. 3 Abbasiya Sqr. – Abbasiya, Cairo Governorate.</li>
                                    <li>Cookies are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.</li>
                                    <li>Country refers to: Egypt</li>
                                    <li>Device means any device that can access the Service such as a computer, a cellphone or a digital tablet.</li>
                                    <li>Personal Data is any information that relates to an identified or identifiable individual.</li>
                                    <li>Service refers to the Website.</li>
                                    <li>Service Provider means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.</li>
                                    <li>Third-party Social Media Service refers to any website or any social network website through which a User can log in or create an account to use the Service.</li>
                                    <li>Usage Data refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).</li>
                                    <li>Website refers to Hatly Store, accessible from http://34.65.137.94</li>
                                    <li>You means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
                                </ul>
                                <h3>Personal Data</h3>
                                <p className="description">While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:</p>
                                <ul className="description">
                                    <li>Email address</li>
                                    <li>First name and last name</li>
                                    <li>Phone number</li>
                                    <li>Country refers to: Egypt</li>
                                    <li>Address, State, Province, ZIP/Postal code, City</li>
                                    <li>Usage Data</li>
                                </ul>
                                <h3>Usage Data</h3>
                                <p className="description">Usage Data is collected automatically when using the Service.</p>
                                <p className="description">Usage Data may include information such as Your Device’s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>
                                <p className="description">When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.</p>
                                <p className="description">We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.</p>
                                <h3>Information from Third-Party Social Media Services</h3>
                                <p className="description">The Company allows You to create an account and log in to use the Service through the following Third-party Social Media Services:</p>
                                <ul className="description">
                                    <li>Google</li>
                                    <li>Facebook</li>
                                    <li>Twitter</li>
                                </ul>
                                <p className="description">If You decide to register through or otherwise grant us access to a Third-Party Social Media Service, We may collect Personal data that is already associated with Your Third-Party Social Media Service’s account, such as Your name, Your email address, Your activities or Your contact list associated with that account.</p>
                                <p className="description">You may also have the option of sharing additional information with the Company through Your Third-Party Social Media Service’s account. If You choose to provide such information and Personal Data, during registration or otherwise, You are giving the Company permission to use, share, and store it in a manner consistent with this Privacy Policy.</p>
                                <h3>Tracking Technologies and Cookies</h3>
                                <p className="description">We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service. The technologies We use may include:</p>
                                <ul className="description">
                                    <li>Cookies or Browser Cookies. A cookie is a small file placed on Your Device. You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of our Service. Unless you have adjusted Your browser setting so that it will refuse Cookies, our Service may use Cookies.</li>
                                    <li>Flash Cookies. Certain features of our Service may use local stored objects (or Flash Cookies) to collect and store information about Your preferences or Your activity on our Service. Flash Cookies are not managed by the same browser settings as those used for Browser Cookies. For more information on how You can delete Flash Cookies, please read “Where can I change the settings for disabling, or deleting local shared objects?” available at <a href="https://helpx.adobe.com/flash-player/kb/disable-local-shared-objects-flash.html#main_Where_can_I_change_the_settings_for_disabling__or_deleting_local_shared_objects_">this link</a></li>
                                    <li>Web Beacons. Certain sections of our Service and our emails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, to count users who have visited those pages or opened an email and for other related website statistics (for example, recording the popularity of a certain section and verifying system and server integrity).
                                    </li>
                                </ul>
                                <p className="description">
                                    Cookies can be “Persistent” or “Session” Cookies. Persistent Cookies remain on Your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close Your web browser. Learn more about cookies: What Are Cookies?.

                                </p>
                                <h3>We use both Session and Persistent Cookies for the purposes set out below:</h3>

                                <ul className="description">
                                    <li>Necessary / Essential CookiesType: Session CookiesAdministered by: UsPurpose: These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services.
                                    </li>
                                    <li>Cookies Policy / Notice Acceptance CookiesType: Persistent CookiesAdministered by: UsPurpose: These Cookies identify if users have accepted the use of cookies on the Website.
                                    </li>
                                    <li>Functionality CookiesType: Persistent CookiesAdministered by: UsPurpose: These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website.
                                    </li>
                                </ul>
                                <p className="description">For more information about the cookies we use and your choices regarding cookies, please visit our Cookies Policy or the Cookies section of our Privacy Policy.</p>
                                <h3>Use of Your Personal Data
                                </h3>
                                <p className="description">The Company may use Personal Data for the following purposes:
                                </p>
                                <ul className="description">
                                    <li>To provide and maintain our Service, including to monitor the usage of our Service.
                                    </li>
                                    <li>To manage Your Account: to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.
                                    </li>
                                    <li>For the performance of a contract: the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.
                                    </li>
                                    <li>To contact You: To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application’s push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.
                                    </li>
                                    <li>To provide You with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.
                                    </li>
                                    <li>To manage Your requests: To attend and manage Your requests to Us.
                                    </li>
                                    <li>For business transfers: We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred.
                                    </li>
                                    <li>For other purposes: We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience.
                                    </li>
                                </ul>
                                <p>We may share Your personal information in the following situations:
                                </p>
                                <ul className="description">
                                    <li>With Service Providers: We may share Your personal information with Service Providers to monitor and analyze the use of our Service, to contact You.
                                    </li>
                                    <li>For business transfers: We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.
                                    </li>
                                    <li>With Affiliates: We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us.
                                    </li>
                                    <li>With business partners: We may share Your information with Our business partners to offer You certain products, services or promotions.
                                    </li>
                                    <li>With other users: when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside. If You interact with other users or register through a Third-Party Social Media Service, Your contacts on the Third-Party Social Media Service may see Your name, profile, pictures and description of Your activity. Similarly, other users will be able to view descriptions of Your activity, communicate with You and view Your profile.
                                    </li>
                                    <li>With Your consent: We may disclose Your personal information for any other purpose with Your consent.
                                    </li>
                                </ul>
                                <h3>Retention of Your Personal Data</h3>
                                <p className="description">
                                    The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with ou21	qr legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.
                                </p>
                                <p className="description">The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.
                                </p>
                                <h3>Transfer of Your Personal Data</h3>
                                <p className="description">
                                    Your information, including Personal Data, is processed at the Company’s operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.

                                </p>
                                <p className="description">Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.
                                </p>
                                <p className="description">The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.
                                </p>
                                <h3>Disclosure of Your Personal Data</h3>
                                <h4>Business Transactions</h4>
                                <p className="description">If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.
                                </p>
                                <h4>Law enforcement</h4>
                                <p className="description">Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).
                                </p>
                                <h4>Other legal requirements</h4>
                                <p className="description">
                                    The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:
                                </p>
                                <ul className="description">
                                    <li>Comply with a legal obligation
                                    </li>
                                    <li>Protect and defend the rights or property of the Company
                                    </li>
                                    <li>Prevent or investigate possible wrongdoing in connection with the Service
                                    </li>
                                    <li>Protect the personal safety of Users of the Service or the public
                                    </li>
                                    <li>Protect against legal liability
                                    </li>
                                </ul>
                                <h4>Security of Your Personal Data</h4>
                                <p className="description">The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.</p>
                                <h4>Children’s Privacy</h4>
                                <p className="description">Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please Contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers.</p>
                                <p className="description">If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your parent’s consent before We collect and use that information.
                                </p>
                                <h4>Links to Other Websites</h4>
                                <p className="description">Our Service may contain links to other websites that are not operated by Us. If You click on a third-party link, You will be directed to that third party’s site. We strongly advise You to review the Privacy Policy of every site You visit.</p>
                                <p className="description">We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.</p>
                                <h4>Changes to this Privacy Policy</h4>
                                <p className="description">We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.</p>
                                <p className="description">We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the “Last updated” date at the top of this Privacy Policy.</p>
                                <p className="description">You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                                </p>
                                </div>
                        </div>
                    </div>
                </div>

            </div>
        </motion.div>
    )
}

export default Policy