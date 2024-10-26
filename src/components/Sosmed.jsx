import React from "react";
import './css/sosmed.css';
// import './js/sosmed.js';
import Facebook from "./svg/facebook.svg";
import FacebookWhite from "./svg/facebook-white.svg";
import Github from "./svg/github.svg";
import GithubWhite from "./svg/github-white.svg";
import Instagram from "./svg/instagram.svg";
import InstagramWhite from "./svg/instagram-white.svg";
import Telegram from "./svg/telegram.svg";
import TelegramWhite from "./svg/telegram-white.svg";
import Twiter from "./svg/x.svg";
import TwiterWhite from "./svg/x-white.svg";
import Whatsapp from "./svg/whatsapp.svg";
import WhatsappWhite from "./svg/whatsapp-white.svg";
import Youtube from "./svg/youtube.svg";
import YoutubeWhite from "./svg/youtube-white.svg";
import Tiktok from "./svg/tiktok.svg";
import TiktokWhite from "./svg/tiktok-white.svg";
import Linkedin from "./svg/linkedin.svg";
import LinkedinWhite from "./svg/linkedin-white.svg";


const Sosmed = () => {
  <script>
    
  </script> 
  return (
    <div>
      <h2 className="text-4xl font-bold text-center mb-12 text-white hover:text-purple-400 duration-300">
        TOOLS
      </h2>
      <div className="flex justify-center">
      <div className="bg-gradient-radial from-purple-700/80 via-purple-500/0 to-transparent p-2 w-full max-w-5xl flex justify-center items-center ">
        <div x-data="{}"
    x-init="$nextTick(() => {
        let ul = $refs.logos;
        ul.insertAdjacentHTML('afterend', ul.outerHTML);
        ul.nextSibling.setAttribute('aria-hidden', 'true');
    })"
    class="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"> 
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
            <li className="group relative w-12 h-12 mx-2">
              <img 
                src={FacebookWhite}
                alt="Facebook"
                className="transition-opacity opacity-100 group-hover:opacity-0 duration-300"
              />
              <img
                src={Facebook}
                alt="Facebook"
                className="absolute top-0 left-0 w-full h-full transition-opacity opacity-0 group-hover:opacity-100 duration-300"
              />
            </li>

            
            <li className="group relative w-12 h-12 mx-2">
              <img
                src={GithubWhite}
                alt="Github"
                className="transition-opacity opacity-100 group-hover:opacity-0 duration-300"
              />
              <img
                src={Github}
                alt="Github"
                className="absolute top-0 left-0 w-full h-full transition-opacity opacity-0 group-hover:opacity-100 duration-300"
              />
            </li>

         
            <li className="group relative w-12 h-12 mx-2">
              <img
                src={InstagramWhite}
                alt="Instagram"
                className="transition-opacity opacity-100 group-hover:opacity-0 duration-300"
              />
              <img
                src={Instagram}
                alt="Instagram"
                className="absolute top-0 left-0 w-full h-full transition-opacity opacity-0 group-hover:opacity-100 duration-300"
              />
            </li>

    
            <li className="group relative w-12 h-12 mx-2">
              <img
                src={TelegramWhite}
                alt="Telegram"
                className="transition-opacity opacity-100 group-hover:opacity-0 duration-300"
              />
              <img
                src={Telegram}
                alt="Telegram"
                className="absolute top-0 left-0 w-full h-full transition-opacity opacity-0 group-hover:opacity-100 duration-300"
              />
            </li>

            <li className="group relative w-12 h-12 mx-2">
              <img
                src={TwiterWhite}
                alt="Twitter"
                className="transition-opacity opacity-100 group-hover:opacity-0 duration-300"
              />
              <img
                src={Twiter}
                alt="Twiter"
                className="absolute top-0 left-0 w-full h-full transition-opacity opacity-0 group-hover:opacity-100 duration-300"
              />
            </li>

      
            <li className="group relative w-12 h-12 mx-2">
              <img
                src={WhatsappWhite}
                alt="Whatsapp"
                className="transition-opacity opacity-100 group-hover:opacity-0 duration-300"
              />
              <img
                src={Whatsapp}
                alt="Whatsapp"
                className="absolute top-0 left-0 w-full h-full transition-opacity opacity-0 group-hover:opacity-100 duration-300"
              />
            </li>


            <li className="group relative w-12 h-12 mx-2">
              <img
                src={YoutubeWhite}
                alt="Youtube"
                className="transition-opacity opacity-100 group-hover:opacity-0 duration-300"
              />
              <img
                src={Youtube}
                alt="Youtube"
                className="absolute top-0 left-0 w-full h-full transition-opacity opacity-0 group-hover:opacity-100 duration-300"
              />
            </li>


            <li className="group relative w-12 h-12 mx-2">
              <img
                src={TiktokWhite}
                alt="Tiktok"
                className="transition-opacity opacity-100 group-hover:opacity-0 duration-300"
              />
              <img
                src={Tiktok}
                alt="Tiktok"
                className="absolute top-0 left-0 w-full h-full transition-opacity opacity-0 group-hover:opacity-100 duration-300"
              />
            </li>

        
            <div className="group relative w-12 h-12 mx-2">
              <img
                src={LinkedinWhite}
                alt="Linkedin"
                className="transition-opacity opacity-100 group-hover:opacity-0 duration-300"
              />
              <img
                src={Linkedin}
                alt="Linkedin"
                className="absolute top-0 left-0 w-full h-full transition-opacity opacity-0 group-hover:opacity-100 duration-300"
              />
            </div>
          </ul>
          <ul className="flex ml-5 items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
            <li className="group relative w-12 h-12 mx-2">
              <img 
                src={FacebookWhite}
                alt="Facebook"
                className="transition-opacity opacity-100 group-hover:opacity-0 duration-300"
              />
              <img
                src={Facebook}
                alt="Facebook"
                className="absolute top-0 left-0 w-full h-full transition-opacity opacity-0 group-hover:opacity-100 duration-300"
              />
            </li>

            
            <li className="group relative w-12 h-12 mx-2">
              <img
                src={GithubWhite}
                alt="Github"
                className="transition-opacity opacity-100 group-hover:opacity-0 duration-300"
              />
              <img
                src={Github}
                alt="Github"
                className="absolute top-0 left-0 w-full h-full transition-opacity opacity-0 group-hover:opacity-100 duration-300"
              />
            </li>

         
            <li className="group relative w-12 h-12 mx-2">
              <img
                src={InstagramWhite}
                alt="Instagram"
                className="transition-opacity opacity-100 group-hover:opacity-0 duration-300"
              />
              <img
                src={Instagram}
                alt="Instagram"
                className="absolute top-0 left-0 w-full h-full transition-opacity opacity-0 group-hover:opacity-100 duration-300"
              />
            </li>

    
            <li className="group relative w-12 h-12 mx-2">
              <img
                src={TelegramWhite}
                alt="Telegram"
                className="transition-opacity opacity-100 group-hover:opacity-0 duration-300"
              />
              <img
                src={Telegram}
                alt="Telegram"
                className="absolute top-0 left-0 w-full h-full transition-opacity opacity-0 group-hover:opacity-100 duration-300"
              />
            </li>

            <li className="group relative w-12 h-12 mx-2">
              <img
                src={TwiterWhite}
                alt="Twitter"
                className="transition-opacity opacity-100 group-hover:opacity-0 duration-300"
              />
              <img
                src={Twiter}
                alt="Twiter"
                className="absolute top-0 left-0 w-full h-full transition-opacity opacity-0 group-hover:opacity-100 duration-300"
              />
            </li>

      
            <li className="group relative w-12 h-12 mx-2">
              <img
                src={WhatsappWhite}
                alt="Whatsapp"
                className="transition-opacity opacity-100 group-hover:opacity-0 duration-300"
              />
              <img
                src={Whatsapp}
                alt="Whatsapp"
                className="absolute top-0 left-0 w-full h-full transition-opacity opacity-0 group-hover:opacity-100 duration-300"
              />
            </li>


            <li className="group relative w-12 h-12 mx-2">
              <img
                src={YoutubeWhite}
                alt="Youtube"
                className="transition-opacity opacity-100 group-hover:opacity-0 duration-300"
              />
              <img
                src={Youtube}
                alt="Youtube"
                className="absolute top-0 left-0 w-full h-full transition-opacity opacity-0 group-hover:opacity-100 duration-300"
              />
            </li>


            <li className="group relative w-12 h-12 mx-2">
              <img
                src={TiktokWhite}
                alt="Tiktok"
                className="transition-opacity opacity-100 group-hover:opacity-0 duration-300"
              />
              <img
                src={Tiktok}
                alt="Tiktok"
                className="absolute top-0 left-0 w-full h-full transition-opacity opacity-0 group-hover:opacity-100 duration-300"
              />
            </li>

        
            <li className="group relative w-12 h-12 mx-2">
              <img
                src={LinkedinWhite}
                alt="Linkedin"
                className="transition-opacity opacity-100 group-hover:opacity-0 duration-300"
              />
              <img
                src={Linkedin}
                alt="Linkedin"
                className="absolute top-0 left-0 w-full h-full transition-opacity opacity-0 group-hover:opacity-100 duration-300"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default Sosmed;
