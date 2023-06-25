import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';

import state from '../store';
import { CustomButton } from '../components';
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion';

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation('left')}>
          <motion.header {...slideAnimation("down")}>
            <img 
              src='./threejs.png'
              alt="logo"
              className="w-25 h-20  bg-gradient-to-r from-indigo-500-blend-multiply to-red-500-blend-multiply"
            />
          </motion.header>

          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="font-sans text-neutral-200 text-justify text-[120px]">
                LET'S GO <br/>TO 2085<br className="xl:block hidden text-neutral-200 text-justify" /> MARTY!!!.
              </h1>
            </motion.div>
            <motion.div
              {...headContentAnimation}
              className="flex flex-col gap-5"
            >
             
             <p class="text-[40px] text-justify font-extrabold italic text-red-400">Dr.Emmet Brown</p> <p className="max-w-md font-normal  text-neutral-200 text-base">We Should Customize Our Appearance Marty! <strong class="text-justify">To Mixup With the Future People.... The way I see it, if you’re gonna build a time machine into a car, why not do it with some style?”</strong>
              </p>

              <CustomButton 
                type="filled"
                title="Great Scott!!"
                handleClick={() => state.intro = false}
                customStyles="w-fit px-7 py-3.5 font-bold capitalize hover:uppercase bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500  drop-shadow-2xl "
              />
            </motion.div> 
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home