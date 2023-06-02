import KpiSummary from "../../../components/KpiSummary/KpiSummary";

const Dashboard = () => {
    return (
        
          <div className="flex flex-col h-screen lg:px-1 2xl:px-4 lg:space-x-1 2xl:space-x-4 bg-gray-800">
            <div className="">
              <KpiSummary />
            </div>
        </div>
    )
}

export default Dashboard;