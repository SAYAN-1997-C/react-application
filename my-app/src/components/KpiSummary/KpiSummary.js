import { play } from "../../assets";


const data1 = [
  {
    // title: "New Joines", 
    count: 10, Icon: "NewJoine", color: "#CBFFE6"
  },
  {
    // title: "Trainings Conducted", 
    count: 9, Icon: "Training", color: "#CBFFE6"
  },
  {
    // title: "Average Attendance",
    count: 98,
    Icon: "AverageAttend",
    color: "#E6EEF7",
  },
  {
    // title: "Inbound Deputations", 
    count: 9, Icon: "Inbound", color: "#E6EEF7"
  },
  {
    // title: "Indents Approved",
    count: 15,
    Icon: "IndentsApprove",
    color: "#CBFFE6",
  },
  {
    // title: "Indents Pending Approval",
    count: 23,
    Icon: "IndentsPendingApproval",
    color: " #CBFFE6",
  },
  {
    // title: "Bill Approve", 
    count: 15, Icon: "BillApp", color: "#F9E8E1"
  },

  {
    // title: "Bill Pending Approval",
    count: 23,
    Icon: "BillPending",
    color: "#F9E8E1",
  },
  {
    // title: "New Joines", 
    count: 10, Icon: "NewJoine", color: "#CBFFE6"
  },
  {
    // title: "Trainings Conducted", 
    count: 9, Icon: "Training", color: "#CBFFE6"
  },
  {
    // title: "Average Attendance",
    count: 98,
    Icon: "AverageAttend",
    color: "#E6EEF7",
  },
  {
    // title: "Inbound Deputations", 
    count: 9, Icon: "Inbound", color: "#E6EEF7"
  },
  {
    // title: "Indents Approved",
    count: 15,
    Icon: "IndentsApprove",
    color: "#CBFFE6",
  },
  {
    // title: "Indents Pending Approval",
    count: 23,
    Icon: "IndentsPendingApproval",
    color: " #CBFFE6",
  },
  {
    // title: "Bill Approve", 
    count: 15, Icon: "BillApp", color: "#F9E8E1"
  },

  {
    // title: "Bill Pending Approval",
    count: 23,
    Icon: "BillPending",
    color: "#F9E8E1",
  },
  {
    // title: "New Joines", 
    count: 10, Icon: "NewJoine", color: "#CBFFE6"
  },
  {
    // title: "Trainings Conducted", 
    count: 9, Icon: "Training", color: "#CBFFE6"
  },
  {
    // title: "Average Attendance",
    count: 98,
    Icon: "AverageAttend",
    color: "#E6EEF7",
  },
  {
    // title: "Inbound Deputations", 
    count: 9, Icon: "Inbound", color: "#E6EEF7"
  },
  {
    // title: "Indents Approved",
    count: 15,
    Icon: "IndentsApprove",
    color: "#CBFFE6",
  },
  {
    // title: "Indents Pending Approval",
    count: 23,
    Icon: "IndentsPendingApproval",
    color: " #CBFFE6",
  },
  {
    // title: "Bill Approve", 
    count: 15, Icon: "BillApp", color: "#F9E8E1"
  },

  {
    // title: "Bill Pending Approval",
    count: 23,
    Icon: "BillPending",
    color: "#F9E8E1",
  },
  {
    // title: "New Joines", 
    count: 10, Icon: "NewJoine", color: "#CBFFE6"
  },
  {
    // title: "Trainings Conducted", 
    count: 9, Icon: "Training", color: "#CBFFE6"
  },
  {
    // title: "Average Attendance",
    count: 98,
    Icon: "AverageAttend",
    color: "#E6EEF7",
  },
  {
    // title: "Inbound Deputations", 
    count: 9, Icon: "Inbound", color: "#E6EEF7"
  },
  {
    // title: "Indents Approved",
    count: 15,
    Icon: "IndentsApprove",
    color: "#CBFFE6",
  },
  {
    // title: "Indents Pending Approval",
    count: 23,
    Icon: "IndentsPendingApproval",
    color: " #CBFFE6",
  },
  {
    // title: "Bill Approve", 
    count: 15, Icon: "BillApp", color: "#F9E8E1"
  },

  {
    // title: "Bill Pending Approval",
    count: 23,
    Icon: "BillPending",
    color: "#F9E8E1",
  },
];
const KpiSummary = () => {
  return (
    <div className="grid grid-cols-8">
      
        {data1?.map((item) => (
          <div
            
            className="p-4"
          >
            {/* <img src={play} alt="play"/> */}
            <h1 className="text-white">
              {item.count}
            </h1>
            
          </div>
        ))}
      
    </div>
  );
};

export default KpiSummary;
