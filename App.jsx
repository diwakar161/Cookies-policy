

import React from 'react';
import { useRef } from 'react';
import './index.css';
import ScrollToTopButton from './components/ScrollToTopButton';



function App() {
  const myref=useRef(null);
   const scrollToSection=(elementRef)=>{
    window.scrollTo({
      top:elementRef.current.offsetTop,
      behavior:'smooth'
    })
   }
  return (
    
    <div>
      
      
      <div className='aline'>
        <div className='cookies'>Cookies Policy</div>
        <h4 className='intro'>Introduction</h4>
        <div className='para'>
          This Cookie Policy (“Policy”) explains that we believe in being open and clear about how we use your information. In the spirit of transparency, this Policy provides detailed information about how and when we use cookies on our Websites. This cookie policy applies to any 99acres.com product or service that links to this policy or incorporates it by reference.
           </div>
        <div className='heading'>
           a.Does 99acres.com uses cookies?
        </div>
        <div className='para'>
        99acres.com uses cookies, tags and other technologies when you use any of the 99acres.com websites, mobile sites or mobile apps (collectively “the services”). Cookies are used to ensure everyone has their best possible experience. Cookies also help us keep your account safe. By continuing to visit or use our services, you are agreeing to the use of cookies and similar technologies for the purposes we describe in this policy. If you prefer not to receive cookies or web beacons, then you should stop using our site, or consult your browsing and third party cookie settings as described below.
        </div>
        <div className='heading'>
          b.What is a cookie?
        </div>
        <div className='para'>
        Cookies are small pieces of text stored by a website you visit in your browser and subsequently sent by your web browser in every request to the website. A cookie file is stored in your web browser and allows the Site or a third-party to recognize you and make your next visit easier and the Site more useful to you. Essentially, cookies are a user’s identification card for the 99acres.com servers. Cookies allow 99acres.com to serve you better and more efficiently, and to personalize your experience on our site. Web beacons, tags and scripts may be used in the Websites or in emails to help us to deliver cookies, count visits, understand usage and campaign effectiveness and determine whether an email has been opened and acted upon. We may analyse or perform analysis based on the use of these technologies and generate reports on an individual and aggregated basis.  
        </div>
        <div className='para'>
        Cookies can be "persistent" or "session" cookies. A persistent cookie helps us recognize you as an existing user, so it’s easier to return to 99acres.com or interact with our services without signing in again. After you sign in, a persistent cookie stays in your browser and will be read by 99acres.com when you return to one of our sites or a partner site that uses our services. Session cookies only last for as long as the session (usually the current visit to a website or a browser session).
        </div> 
        <div className='heading'>
            c.What are cookies used for?
        </div>
        <div className='para'>
        When you visit our Websites, we may place a number of cookies in your browser. These are known as First Party Cookies and are required to enable to hold session information as you navigate from page to page within the website. For example, we use cookies on our Websites to understand visitor and user preferences, improve their experience, and track and analyse usage, navigational and other statistical information. Additionally, cookies allow us to bring you advertising both on and off the 99acres.com site, and bring customized features to you. You can control the use of cookies at the individual browser level. If you elect not to activate the cookie or to later disable cookies, you may still visit our Websites, but your ability to use some features or areas of the Websites may be limited.
        </div>
        <div className='para'>
        We may use any of the following categories of cookies on the Websites as detailed below.
        </div>
        <div className='para'>
        Each cookie falls within one of the four following categories:
        </div>
      <div>
        
      <table>
      <thead>
          <tr  >
            <th className='twohead'>Category</th>
            <th className='twohead' >Description</th>
            
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='para' > 1. Essential Cookies</td>
            <td className='para'> Essential cookies (First Party Cookies) are sometimes called “strictly necessary” as without them we cannot provide many services that you need on the Website. For example, essential cookies help remember your preferences as you move around the Website. Essential cookies also keep you logged in into a website. Without them the login functionality would not work.  </td>
            
          </tr>
          <tr>
            <td className='para' > 2.Analytics Cookies    </td>
            <td className='para'>  These cookies track information about visits to the 99acres.com and partner websites so that we can make improvements and report our performance. For example: analyse visitor and user behaviour so as to provide more relevant content or suggest certain activities. They collect information about how visitors use the Websites, which site the user came from, the number of each user’s visits and how long a user stays on the Websites. We might also use analytics cookies to test new ads, pages, or features to see how users react to them.  </td>
            
          </tr>
          <tr>
            <td className='para'>3. Functionality or Preference Cookies   </td>
            <td className='para'>  During your visit to the Websites, cookies are used to remember information you have entered or choices you make (such as your username, language or your region) on the Websites. They also store your preferences when personalizing the Websites to optimize your use of 99acres.com. These preferences are remembered, through the use of the persistent cookies, and the next time you visit the Websites you will not have to set them again.  </td>
            
          </tr>
          <tr>
            <td className='para'>4. Targeting or Advertising Cookies  </td>
            <td className='para'>  These Cookies are placed by third party advertising platforms or networks or 99acres.com in order to, deliver ads and track ad performance, enable advertising networks to deliver ads that may be relevant to you based upon your activities (this is sometimes called “behavioural” “tracking” or “targeted” advertising) on the Websites. They may subsequently use information about your visit to target you with advertising that you may be interested in, on 99acres.com websites or other websites. For example, these cookies remember which browsers have visited the websites.  </td>
            
          </tr>
          
        </tbody>
      </table> <br></br>





      </div>

        
        <div className='heading'>
            d.When does 99acre.com place cookies?
        </div >
       
        <div className='para'>
        We use cookies on our websites, mobile sites and mobile applications. Any browser visiting these sites will receive cookies from us which helps us identify you more quickly when you return. Cookies help us to determine which pages or information you find most useful or interesting on our own websites.
        </div>
        <div className='para'>
        99acres.com may also have some cookies for its own analytics i.e. analytics not part of Google Analytics. Such cookies help generate statistics and reports about visitors and their activities on the website or app.
        </div>
        <div className='heading'>
             e.How cookies are used for online analytics purposes
        </div>
        <div className='para'>
        We may use web analytics services on 99acres.com, such as those of Google Analytics. These services help us analyse how users use the services, including by noting the third-party website from which you arrive. The information collected by the technology will be disclosed to or collected directly by such service providers, who use the information to evaluate your use of the services. We also use Google Analytics for certain purposes related to online marketing, as described in the following sections
        </div>
        <div className='heading'>
             f.How are cookies used for advertising purposes?
        </div>
        <div className='para'>
        Cookies and other ad technology such as beacons, pixels, and tags help us serve relevant ads to you more effectively. They also help us provide aggregated auditing, research, and reporting for advertisers, understand and improve our service, and know when content has been shown to you. We work with website analytics and advertising partners, including Google Display Network, Facebook, etc. to deliver 99acres.com advertisements on third party publisher websites - these partners may set cookies on your computer's web browser. These cookies allow our partners to recognize your computer so that the ad server can show you 99acres.com advertisements elsewhere on the Internet, and so that our analytics software can measure your engagement and interactions while using 99acres.com services. In this way, ad servers may compile anonymous, de-identified information about where you, or others who are using your computer, saw our advertisements, whether or not you interacted with our advertisements, and actions performed on subsequent visits to 99acres.com websites and applications. This information allows an ad network to deliver targeted advertisements that they believe will be of most interest to you, and it allows 99acres.com to optimize the performance of our advertising campaigns and the usability of our website. In other words, we use analytics data in concert with data about our online ads that have been shown using the Google Display Network, Facebook for Advertisers, or other online advertising networks. By doing so, we can understand how anonymous users interacted with our website after seeing our ads.
        </div>
        <div ref={myref} className='ghead' >
              g.What third-party cookies does 99acres.com use?
        </div>
        <div className='para'>
        Please note that the third parties (advertising networks and providers of external services like web traffic analysis services) may also use cookies on our Services. Cookies on our sites. Also, note that the names of cookies, pixels and other technologies may change over time.

        </div>
        <div className='para'>
        We use trusted partners to help us service advertising, who may place cookies on your device. We also pull through content from social networks into our own pages, such as embedded Facebook feeds. The social networks, such as Facebook, Google, etc. may themselves also put cookies on your machine. If a user logs into Facebook, Twitter or Google+ via our website, they will leave a cookie on the users' computer. This is the same process as if the user logs into these social networks directly.
        </div> 
        <div className='para'>
        We also use Google Analytics on our Services to help us analyse how our Services are used. Google Analytics uses performance cookies to track customer’s interactions. For example, by using cookies, Google can tell us which pages our users view, which are most popular, what time of day our websites are visited, whether visitors have been to our websites before, what website referred the visitor to our websites, and other similar information. All of this information is anonymized.
        </div>
        <div className='para'>
        We suggest that you should check the respective privacy policies for these external services to help you understand what data these organisations hold about you and how they process it.
        </div>
        <div >
        <span className='prelink'>facebook</span><a className='link' href='https://www.facebook.com/privacy/policy/?entry_point=data_policy_redirect&entry=0'>   https://www.facebook.com/policy.php</a><br></br>
            
            <span className='prelink'> AdSense: <a className='link' href='https://policies.google.com/technologies/ads'>
                https://www.policies.google.com/technologies/ads  </a></span><br></br>
            <span className='prelink'> Google Analytics: <a className='link' href='https://marketingplatform.google.com/about/'> http://www.google.com/analytics/learn/privacy.html</a></span><br></br>
            <span className='prelink'> Google Tag Manager: <a className='link' href='https://marketingplatform.google.com/about/'>
                   https://www.google.com/analytics/tag-manager/faq/</a></span><br></br>
            <span className='prelink'> Google+: <a className='link' href='https://policies.google.com/privacy'>
                  https://www.google.com/policies/privacy/</a></span><br></br>
            <span className='prelink'> Twitter: <a className='link' href='https://twitter.com/en/privacy'>
                https://twitter.com/en/privacy </a></span><br></br>
            <span className='prelink'> Google Double click: <a className='link' href='https://support.google.com/admanager/answer/2839090?hl=en'>
                https://support.google.com/dpf_premium/answer/2839090?hl=en </a></span><br></br><br></br>
            

</div>


        
        <div className='heading'>
            h.What are Web Beacons?
        </div>
        <div className='para'>
        99acres.com occasionally advertises on third party websites. As part of our effort to track the success of our advertising campaigns, we may at times use a visitor identification technology such as "web beacons," or "action tags," which count visitors who have come to our site after being exposed to a 99acres.com banner ad on a third party site. Our partners may also use web beacons to collect data in the aggregate as provided by your browser while you are on our site or another site where 99acres.com is third party.
        </div>
        <div className='para'>
        By navigating on our site, you agree that we can place cookie and web beacons on your computer or device. If you prefer not to receive web beacons, then you should stop using our site, or consult your browsing settings.
        </div >
        <div className='heading'>
          i.How to Control Cookies?
        </div>
        <div className='para'>
        Most browsers allow you to control cookies through their settings preferences. However, if you choose to turn off these cookies, you will still see advertising on the internet but it may not be tailored to your interests. It does not mean that you won't be served any advertisements whilst you are online. Whilst we have mentioned most of the third parties involved in using targeting or advertising cookies in the preceding<button className='nobutton' onClick={()=>scrollToSection(myref)}  >section</button>the list is not exhaustive and is subject to change. Therefore, even if you choose to turn off all the third party cookies listed in<button className='nobutton' onClick={()=>scrollToSection(myref)}  >section</button>,you may still receive some tailored advertisements and recommendations.
       
        
        </div>
       <div className='para'>
       There are a number of ways you can manage what cookies are set on your devices. Essential cookies, however, cannot be disabled. If you do not allow certain cookies to be installed, the website may not be accessible to you and/or the performance, features, or services of the website may be compromised.
       </div>
      <div className='para'>
      You can also manage this type of cookie in the privacy settings on the web browser you are using. Please note that if you use your browser settings to block all cookies you may not be able to access parts of our or others' websites. Please see below for more information.


      </div>
      <div>

      <div className='para'>
        <i className='italic'>Changing your Cookies Settings.</i>
        The browser settings for changing your cookies settings are usually found in the 'options' or 'preferences' menu of your internet browser. In order to understand these settings, the following links may be helpful. Otherwise you should use the 'Help' option in your internet browser for more details.
        </div>
        
          <ul>
         <li> <a target='blank' className='link2' href='https://support.microsoft.com/en-us/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d'>.Cookie settings in Internet Explorer </a></li>
          
          
          <li><a target='blank' className='link2' href='https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop?redirectslug=enable-and-disable-cookies-website-preferences&redirectlocale=en-US'>.Cookies settings in Firefox </a></li>
          
          
          <li><a target='blank' className='link2' href='https://support.google.com/chrome/answer/95647'>.Cookies settings in Chrome</a></li>
          
          
          <li><a target='blank' className='link2' href='https://support.apple.com/kb/ph21411?locale=en_GB'>.Cookies settings in Safari</a></li>
          </ul>
          <div>
        
          
          
          
        </div> 
      </div>
      <div className='para'>

       <i className='italic'> More information:</i>  To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit  <a className='inlink' href=' https://www.allaboutcookies.org/  ' > www.allaboutcookies.org/  </a>  You can learn more about opting out of receiving interest-based ads from other companies at  and <a className='inlink ' href='  https://optout.aboutads.info/?c=2&lang=EN   ' > optout.aboutads.info </a> and <a className='inlink' href='  https://optout.networkadvertising.org/?c=1   ' >www.networkadvertising.org/choices  </a> . In addition, certain third party advertising networks, like Facebook (pixels) and Google, permit users to opt out of or customize preferences associated with your internet browsing. To learn more about this feature from Google, click  <a className='presection' href='  https://support.microsoft.com/en-us/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d  '>here</a>  .For further information about the Facebook Pixel, click <a className='presection' href='  https://support.microsoft.com/en-us/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d  '   >here</a>.
      </div>
      
     

       
       

        
       
      </div>
      <ScrollToTopButton/>
    </div>
  );
}

export default App; 