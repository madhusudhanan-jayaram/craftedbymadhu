import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const LoanProjectShowcase = () => {
  return (
    <Card className="bg-slate-900 border-slate-700">
      <CardHeader>
        <CardTitle className="text-2xl text-slate-50">🚦 Loan Approval Prediction</CardTitle>
        <p className="text-lg text-orange-400 font-semibold">Machine Learning Engineer - End-to-End AI Solution</p>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <p className="text-slate-400 leading-relaxed">
          A smart ML-powered web app that predicts loan approvals with real-time explanations. 
          This project combines frontend development and machine learning to deliver an end-to-end solution for automated loan decisioning.
        </p>
        
        <div>
          <h4 className="font-semibold text-lg mb-4 text-slate-50">Key Highlights</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-slate-400">ML model trained on applicant and loan features to predict approvals</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-slate-400">Custom Django front end built with crispy-bootstrap5 for a smooth user experience</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-slate-400">Real-time prediction dashboard with probability scores and explanations</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-slate-400">Config-driven architecture — scalable and API-ready</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
          <h4 className="font-semibold text-lg mb-3 text-orange-400">Acknowledgments</h4>
          <p className="text-slate-400 leading-relaxed italic">
            "Proud to have combined frontend development and machine learning to build a complete end-to-end project."
          </p>
          <p className="text-sm text-slate-400 mt-3">
            Special thanks to <span className="font-semibold text-slate-300">Ramya Dinesh</span>,{" "}
            <span className="font-semibold text-slate-300">Hope Artificial Intelligence Pvt Ltd</span>, and{" "}
            <span className="font-semibold text-slate-300">Ramisha Rani K</span> for their constant support.
          </p>
        </div>
        
        <div>
          <h4 className="font-semibold text-lg mb-3 text-slate-50">Technologies Used</h4>
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-orange-400/10 text-orange-400 border border-orange-400/20">Python 3.11</Badge>
            <Badge className="bg-orange-400/10 text-orange-400 border border-orange-400/20">Django 5.x</Badge>
            <Badge className="bg-orange-400/10 text-orange-400 border border-orange-400/20">scikit-learn</Badge>
            <Badge className="bg-orange-400/10 text-orange-400 border border-orange-400/20">pandas</Badge>
            <Badge className="bg-orange-400/10 text-orange-400 border border-orange-400/20">joblib</Badge>
            <Badge className="bg-orange-400/10 text-orange-400 border border-orange-400/20">crispy-bootstrap5</Badge>
          </div>
        </div>

        <div className="flex gap-4">
          <Button asChild variant="outline" size="sm" className="bg-slate-800 border-orange-400/20 text-orange-400 hover:bg-orange-400/10">
            <a href="https://github.com/yourusername/loan-approval-prediction" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Github size={16} />
              GitHub Repo
            </a>
          </Button>
          <Button asChild variant="outline" size="sm" className="bg-slate-800 border-orange-400/20 text-orange-400 hover:bg-orange-400/10">
            <a href="https://youtube.com/watch?v=YOUR_VIDEO_ID" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <ExternalLink size={16} />
              YouTube Demo
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
