"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

interface FindingData {
  title: string;
  description: string;
  imageUrl: string;
  image2Url?: string;
  category: string;
}

interface KeyFindingsProps {
  findings?: FindingData[];
}



const KeyFindings = ({ findings }: KeyFindingsProps) => {
  const defaultFindings: FindingData[] = [
    {
      title: "Mathematical Numerical Questions",
      description: "Our machine learning model achieved 94% accuracy in medical image classification",
      imageUrl: "/charts/FireWorksllama/mathematical_numerical_heatmap_fireworks_ai.png",
      image2Url: "/charts/FireWorksllama/maths_numerical_linecharts_for_20_firework_ai.png",
      category: "Llama-v3.1-8b"
    },

    {
      title: "Mathematical Numerical Questions",
      description: "Reduced data processing time by 67% compared to traditional method",
      imageUrl: "/charts/gpt-4o-mini/maths_numerical_heatmap_gpt40mini.png",
      image2Url: "/charts/gpt-4o-mini/maths_numerical_linechart_for_20_gpt_4o_mini.png",
      category: "ChatGPT-4o-mini"
    },
    {
      title: "Mathematical Numerical Questions",
      description: "Identified 15 key biomarkers with statistical significance > 0.98",
      imageUrl: "/charts/cluade/maths_numerical_heatmap_claude_sonet_3_7.png",
      image2Url: "/charts/cluade/maths_numerical_linecharts_for_20_claude-sonet-3-7.png",
      category: "Claude-3.7-sonnet"
    },
    {
      title: "Mathematical Text Questions",
      description: "Our machine learning model achieved 94% accuracy in medical image classification",
      imageUrl: "/charts/FireWorksllama/mathematical_textual_heatmap_fireworks_ai.png.png",
      image2Url: "/charts/FireWorksllama/maths_textual_linecharts_for_20_firework_ai.png",
      category: "Llama-v3.1-8b"
    },
    {
      title: "Mathematical Text Questions",
      description: "Reduced data processing time by 67% compared to traditional methods",
      imageUrl: "/charts/gpt-4o-mini/maths_textual_heatmap_gpt40mini.png",
      image2Url: "/charts/gpt-4o-mini/maths_textual_linechart_for_20_gpt_4o_mini.png",
      category: "ChatGPT-4o-mini"
    },
    {
      title: "Mathematical Text Questions",
      description: "Identified 15 key biomarkers with statistical significance > 0.95555555",
      imageUrl: "/charts/cluade/math_textual_heatmap_claude_sone_3_7.png",
      image2Url: "/charts/cluade/math_textual_line_chart_for20_claude_sone_3_7.png",
      category: "Claude-3.7-sonnet"
    },
    {
      title: "True or False Questions",
      description: "Our machine learning model achieved 94% accuracy in medical image classification",
      imageUrl: "/charts/FireWorksllama/true_false_heatmap_fireworks_ai.png",
      image2Url: "/charts/FireWorksllama/true_false_linecharts_for_20_firework_ai.png",
      category: "Llama-v3.1-8b"
    },
    {
      title: "True or False Questions",
      description: "Reduced data processing time by 67% compared to traditional methods",
      imageUrl: "/charts/gpt-4o-mini/true_false_heatmap_gpt40mini.png",
      image2Url: "/charts/gpt-4o-mini/true_false_linecharts_for_20_gpt_4o_mini.png",
      category: "ChatGPT-4o-mini"
    },
    {
      title: "True or False Questions",
      description: "Identified 15 key biomarkers with statistical significance > 0.95",
      imageUrl: "/charts/cluade/true_false_heatmap_claude_sone_3_7.png",
      image2Url: "/charts/cluade/true_false_linecharts_for_20_claude-sonet-3-7.png",
      category: "Claude-3.7-sonnet"
    },
    {
      title: "Logical Questions",
      description: "Our machine learning model achieved 94% accuracy in medical image classification",
      imageUrl: "/charts/FireWorksllama/Logical_Questions_TotalScore_Heatmap.png",
      image2Url: "/charts/FireWorksllama/Logical Questions Accuracy.png",
      category: "Llama-v3.1-8b"
    },
    {
      title: "Logical Questions",
      description: "Reduced data processing time by 67% compared to traditional methods",
      imageUrl: "/charts/gpt-4o-mini/Logical_Questions_TotalScore_Heatmap ChatGPT.png",
      image2Url: "/charts/gpt-4o-mini/Logical Questions Accuracy ChatGPT.png",
      category: "ChatGPT-4o-mini"
    },
    {
      title: "Logical Questions",
      description: "Identified 15 key biomarkers with statistical significance > 0.95",
      imageUrl: "/charts/cluade/Logical_Questions_TotalScore_Heatmap Claude-3.7-sonnet.png",
      image2Url: "/charts/cluade/Logical Questions Accuracy Claude-3.7-sonnet.png",
      category: "Claude-3.7-sonnet"
    },
    {
      title: "General Knowledge Questions",
      description: "Our machine learning model achieved 94% accuracy in medical image classification",
      imageUrl: "/charts/FireWorksllama/Genaral Knowledge_TotalScore_Heatmap.png",
      image2Url: "/charts/FireWorksllama/Genaral Knowledge Questions Accuracy.png",
      category: "Llama-v3.1-8b"
    },
    {
      title: "General Knowledge Questions",
      description: "Reduced data processing time by 67% compared to traditional methods",
      imageUrl: "/charts/gpt-4o-mini/Genaral Knowledge_TotalScore_Heatmap GPT-4O-mini.png",
      image2Url: "/charts/gpt-4o-mini/Genaral Knowledge Questions Accuracy GPT-4O-mini.png",
      category: "ChatGPT-4o-mini"
    },
    {
      title: "General Knowledge Questions",
      description: "Identified 15 key biomarkers with statistical significance > 0.95",
      imageUrl: "/charts/cluade/Genaral Knowledge_TotalScore_Heatmap Claude-3.7-sonnet.png",
      image2Url: "/charts/cluade/Genaral Knowledge Questions Accuracy Claude-3.7-sonnet.png",
      category: "Claude-3.7-sonnet"
    },

  ];


  const additionalFindingsData = [
    {
      title: "Mathematical Numerical Questions",
      description: "Some insight.",
      category: "Extra",
      imageUrl: "/charts/matsh_numerical_3_linecharts_for_overall_accuracy.png",
    },
    {
      title: "Mathematical Text Questions",
      description: "Another insight.",
      category: "Extra",
      imageUrl: "/charts/matsh_textual_3_linecharts_for_overall_accuracy.png",
    },
    {
      title: "True or False Questions",
      description: "Yet another insight.",
      category: "Extra",
      imageUrl: "/charts/true_false_3_linecharts_for_overall_accuracy.png",
    },
    {
      title: "Logical Questions",
      description: "Further insight.",
      category: "Extra",
      imageUrl: "/charts/total_score_comparison Across the all Models_Logical.png",
    },
    {
      title: "General Knowledge Questions",
      description: "Additional insight.",
      category: "Extra",
      imageUrl: "/charts/total_score_comparison Across the all Models_General_Knowledge.png",
    },
 
  ];


  const findingsData = findings || defaultFindings;
  const [zoomedImageData, setZoomedImageData] = useState<{ images: string[]; index: number } | null>(null);




  // inside component
  useEffect(() => {
    if (zoomedImageData) {
      document.body.style.overflow = "hidden"; // disable scroll
    } else {
      document.body.style.overflow = "auto"; // enable scroll back
    }

    // Cleanup on unmount or zoom close
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [zoomedImageData]);

  const rowHeadings = [
    "Mathematical Numerical Questions",
    "Mathematical Text-based Questions",
    "True or False Questions",
    "Logical Questions",
    "General Knowledge Questions",
  ];


  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Findings</h2>
        <p className="text-xl text-gray-600">
          Analysis of Temperature-Based Testing on LLMs<br />  Emergent Behaviors and Performance Across <span className="font-bold">Llama-v3.1-8b</span>, <span className="font-bold">ChatGPT-4o-mini</span> and <span className="font-bold">Claude-3.7-sonnet</span> models.
        </p>
      </div>

      {findingsData.reduce((rows: JSX.Element[], _, index) => {
        if (index % 3 === 0) {
          const row = findingsData.slice(index, index + 3);
          const heading = rowHeadings[Math.floor(index / 3)] || `Section ${Math.floor(index / 3) + 1}`;

          rows.push(
            <div key={index} className="mb-8">
              <h3 className="text-xl font-josefin text-center font-semibold text-gray-800 mb-4">{heading}</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {row.map((finding, idx) => {
                  const actualIndex = index + idx;
                  const colorClass =
                    actualIndex % 3 === 0
                      ? 'text-red-600 bg-red-100'
                      : actualIndex % 3 === 1
                        ? 'text-blue-600 bg-blue-100'
                        : 'text-green-600 bg-green-100';

                  return (
                    <Card
                      key={actualIndex}
                      className="hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer bg-white border border-gray-200"
                    >
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <span className={`text-xs font-medium px-2 py-1 rounded-full ${colorClass}`}>
                            {finding.category}
                          </span>
                        </div>
                        
                        {/* <CardDescription>{finding.description}</CardDescription> */}
                      </CardHeader>
                      <CardContent>
                        <div
                          className="relative overflow-hidden rounded-lg"
                          onClick={() =>
                            setZoomedImageData({
                              images: [finding.imageUrl, finding.image2Url || finding.imageUrl],
                              index: 0,
                            })
                          }
                        >
                          <img
                            src={finding.imageUrl}
                            alt={`${finding.title} graph`}
                            className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110 cursor-zoom-in"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

          );
        }
        return rows;
      }, [])}
      <div className="mb-12 ">
        <h3 className="text-xl font-josefin mt-10 text-center font-semibold text-gray-800 mb-4">
          Performance Comparison between Models For Each Question Type
        </h3>
        <div className="grid md:grid-cols-2 mt-20 gap-4">
          {additionalFindingsData.map((finding, index) => {
            const colorClass =
              index % 3 === 0
                ? 'text-red-600 bg-red-100'
                : index % 3 === 1
                  ? 'text-blue-600 bg-blue-100'
                  : 'text-green-600 bg-green-100';

            return (
              <Card
                key={`extra-${index}`}
                className="hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer bg-white border border-gray-200"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    {/* <span className={`text-xs font-medium px-2 py-1 rounded-full ${colorClass}`}>
                      {finding.category}
                    </span> */}
                  </div>
                  <CardTitle className="text-lg font-quicksand text-center font-semibold">{finding.title}</CardTitle>
                  {/* <CardDescription>{finding.description}</CardDescription> */}
                </CardHeader>
                <CardContent>
                  <div
                    className="relative overflow-hidden rounded-lg"
                    onClick={() =>
                      setZoomedImageData({
                        images: [finding.imageUrl],
                        index: 0,
                      })
                    }
                  >
                    <img
                      src={finding.imageUrl}
                      alt={`${finding.title} graph`}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110 cursor-zoom-in"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>


      {/* Zoomed Image Overlay */}
      {createPortal(
        <AnimatePresence>
          {zoomedImageData && (
            <motion.div
              key="zoomed-overlay"
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
              onClick={() => setZoomedImageData(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {/* Stop click propagation on image area */}
              <div className="relative" onClick={(e) => e.stopPropagation()}>
                <motion.img
                  key={zoomedImageData.index}
                  src={zoomedImageData.images[zoomedImageData.index]}
                  alt="Zoomed view"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="max-w-4xl max-h-[90vh] object-contain cursor-pointer"
                  onClick={() => setZoomedImageData(null)}
                />

                {/* Navigation Arrows */}
                {zoomedImageData.images.length > 1 && (
                  <>
                    {/* Left Arrow */}
                    <button
                      className="absolute left-[-3rem] top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-2 rounded-full"
                      onClick={(e) => {
                        e.stopPropagation();
                        setZoomedImageData((prev) =>
                          prev
                            ? {
                              ...prev,
                              index: (prev.index - 1 + prev.images.length) % prev.images.length,
                            }
                            : null
                        );
                      }}
                    >
                      <FaChevronLeft />
                    </button>

                    {/* Right Arrow */}
                    <button
                      className="absolute right-[-3rem] top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-2 rounded-full"
                      onClick={(e) => {
                        e.stopPropagation();
                        setZoomedImageData((prev) =>
                          prev
                            ? {
                              ...prev,
                              index: (prev.index + 1) % prev.images.length,
                            }
                            : null
                        );
                      }}
                    >
                      <FaChevronRight />
                    </button>
                  </>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        ,
        document.body
      )}


    </div>
  );
};

export default KeyFindings;
