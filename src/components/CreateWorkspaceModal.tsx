
import { Upload, X, ChevronLeft, Plus } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface CreateWorkspaceModalProps {
  onCreateWorkspace: (workspaceData: any) => void;
}

const CreateWorkspaceModal = ({ onCreateWorkspace }: CreateWorkspaceModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [caseDescription, setCaseDescription] = useState("");
  
  const [caseDetails, setCaseDetails] = useState({
    caseType: "",
    complainant: "",
    accused: "",
    victim: "",
    allegations: "",
    factsSummary: "",
    dateOfIncident: "",
    representing: [] as string[]
  });

  const handleRunAiSummariser = () => {
    console.log("Running AI Summariser with description:", caseDescription);
    setCurrentStep(2);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      console.log("Files uploaded:", files);
      setCurrentStep(2);
    }
  };

  const handleGoBack = () => {
    if (currentStep === 2) {
      setCurrentStep(1);
    }
  };

  const handleSaveDetails = () => {
    console.log("Saving case details:", caseDetails);
    
    const newWorkspace = {
      name: `${caseDetails.complainant} vs ${caseDetails.accused}`,
      client: caseDetails.complainant,
      opponent: caseDetails.accused,
      case: caseDetails.caseType,
      areaOfLaw: "Criminal",
      timeline: "Case Created",
      createdDate: new Date().toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      }),
      lastActive: "Just created",
      documentsProcessed: 0,
      drafts: 0,
      inReview: 0,
      completed: 0,
      status: "New"
    };
    
    onCreateWorkspace(newWorkspace);
    
    setCaseDetails({
      caseType: "",
      complainant: "",
      accused: "",
      victim: "",
      allegations: "",
      factsSummary: "",
      dateOfIncident: "",
      representing: []
    });
    setCaseDescription("");
    setCurrentStep(1);
    setIsOpen(false);
  };

  const handleRepresentingChange = (person: string) => {
    setCaseDetails(prev => ({
      ...prev,
      representing: prev.representing.includes(person)
        ? prev.representing.filter(p => p !== person)
        : [...prev.representing, person]
    }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-green-600 hover:bg-green-700">
          <Plus className="mr-2 h-4 w-4" />
          Create New Workspace
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] p-0">
        <div className="relative">
          <button
            onClick={() => {
              setIsOpen(false);
              setCurrentStep(1);
            }}
            className="absolute right-4 top-4 z-10 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
          
          <div className="p-6">
            {currentStep === 1 ? (
              <>
                <DialogHeader className="mb-6">
                  <DialogTitle className="text-xl font-semibold">Case Details</DialogTitle>
                </DialogHeader>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-medium text-gray-700 mb-3">Upload the case files</h3>
                    
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                      <div className="flex flex-col items-center">
                        <Upload className="h-8 w-8 text-gray-400 mb-3" />
                        <p className="text-gray-600 mb-1">Drag and drop your document</p>
                        <p className="text-gray-500 text-sm mb-4">or click to browse files</p>
                        
                        <input
                          type="file"
                          onChange={handleFileUpload}
                          className="hidden"
                          id="file-upload"
                          multiple
                          accept=".pdf,.doc,.docx"
                        />
                        <label
                          htmlFor="file-upload"
                          className="cursor-pointer"
                        >
                          <div className="flex items-center text-sm text-gray-500">
                            <span className="mr-1">📄</span>
                            PDF (max. 20 MB)
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="flex-1 border-t border-gray-300"></div>
                    <span className="px-3 text-gray-500 text-sm">or</span>
                    <div className="flex-1 border-t border-gray-300"></div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-700 mb-3">Add case facts manually</h3>
                    <Textarea
                      placeholder="Enter case description"
                      value={caseDescription}
                      onChange={(e) => setCaseDescription(e.target.value)}
                      className="min-h-[120px] resize-none"
                    />
                  </div>

                  <div className="flex justify-end pt-4">
                    <Button
                      onClick={handleRunAiSummariser}
                      className="bg-slate-800 hover:bg-slate-900 text-white px-6 py-2"
                    >
                      Run AI Summariser
                    </Button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="flex items-center mb-6">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleGoBack}
                    className="mr-4 p-0 h-auto"
                  >
                    <ChevronLeft className="h-4 w-4 mr-1" />
                    Back
                  </Button>
                  <DialogTitle className="text-xl font-semibold">Case Details</DialogTitle>
                </div>

                <div className="space-y-4 max-h-[500px] overflow-y-auto">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      Case Type <span className="text-yellow-500">*</span>
                    </label>
                    <Select
                      value={caseDetails.caseType}
                      onValueChange={(value) => setCaseDetails(prev => ({ ...prev, caseType: value }))}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Criminal" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="criminal">Criminal</SelectItem>
                        <SelectItem value="civil">Civil</SelectItem>
                        <SelectItem value="family">Family</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Complainant</label>
                    <Input
                      placeholder="Seema Batra, Mukesh Kumar"
                      value={caseDetails.complainant}
                      onChange={(e) => setCaseDetails(prev => ({ ...prev, complainant: e.target.value }))}
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Accused</label>
                    <Input
                      placeholder="Ajay Kumar, Raj Rani"
                      value={caseDetails.accused}
                      onChange={(e) => setCaseDetails(prev => ({ ...prev, accused: e.target.value }))}
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Victim</label>
                    <Input
                      placeholder="Neha Kumari"
                      value={caseDetails.victim}
                      onChange={(e) => setCaseDetails(prev => ({ ...prev, victim: e.target.value }))}
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Allegations</label>
                    <Textarea
                      placeholder="Dowry harassment, domestic violence, and abetment to suicide (304B, 498A, DP Act)"
                      value={caseDetails.allegations}
                      onChange={(e) => setCaseDetails(prev => ({ ...prev, allegations: e.target.value }))}
                      className="min-h-[80px] resize-none"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Facts Summary</label>
                    <Textarea
                      placeholder="Neha Kumari found hanging from ceiling fan, with evidence suggesting possible foul play amid dowry harassment allegations"
                      value={caseDetails.factsSummary}
                      onChange={(e) => setCaseDetails(prev => ({ ...prev, factsSummary: e.target.value }))}
                      className="min-h-[80px] resize-none"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Date of Incident</label>
                    <Input
                      type="date"
                      value={caseDetails.dateOfIncident}
                      onChange={(e) => setCaseDetails(prev => ({ ...prev, dateOfIncident: e.target.value }))}
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      Representing (please select) <span className="text-red-500">*</span>
                    </label>
                    <div className="flex gap-2 flex-wrap">
                      {["Neha Kumari", "Ajay Kumar", "Raj Rani"].map((person) => (
                        <Button
                          key={person}
                          variant={caseDetails.representing.includes(person) ? "default" : "outline"}
                          size="sm"
                          onClick={() => handleRepresentingChange(person)}
                          className={caseDetails.representing.includes(person) ? "bg-slate-800 hover:bg-slate-900" : ""}
                        >
                          {person}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex justify-between pt-6 border-t mt-6">
                  <Button
                    variant="outline"
                    onClick={handleGoBack}
                  >
                    Go Back
                  </Button>
                  <Button
                    onClick={handleSaveDetails}
                    className="bg-slate-800 hover:bg-slate-900 text-white"
                  >
                    Save Details
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreateWorkspaceModal;
