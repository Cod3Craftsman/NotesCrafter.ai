import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { FiCheckCircle } from "react-icons/fi";
import { getCurrentUser } from "../services/api.js";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

const PaymentSuccess = () => {
  const [countDown, setCountDown] = useState(5);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    getCurrentUser(dispatch);

    const interval = setInterval(() => {
      setCountDown((prev) => prev - 1);
    }, 1000);

    const t = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => {
      clearTimeout(t);
      clearInterval(interval);
    };
  }, [dispatch, navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 gap-4">
      {/* Success Icon */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 360 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-green-500 text-5xl sm:text-6xl"
      >
        <FiCheckCircle />
      </motion.div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-xl sm:text-2xl font-bold text-gray-600 text-center max-w-md"
      >
        Payment Success! Credits added to your account.
      </motion.h1>

      {/* Countdown */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-gray-500 text-sm text-center"
      >
        Redirecting to home in {countDown} seconds...
      </motion.p>
    </div>
  );
};

export default PaymentSuccess;