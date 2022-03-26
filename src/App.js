import { motion } from "framer-motion";
import { useState } from "react";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="App">
      <motion.div
        layout
        transition={{ layout: { duration: 1, type: "spring" } }}
        className="card"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        style={{
          borderRadius: "1rem",
          boxShadow: "0px 10px 30px rgba(0,0,0,0.5",
        }}
      >
        <motion.h2 layout="position">Framer Motion</motion.h2>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="expand"
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a
              dolor hendrerit lacus euismod mollis at in libero. Curabitur sit.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut.
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

export default App;
