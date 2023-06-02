import axios from "axios";

export default class DashboardService {

    saveSongInPlayList(newSong) {

        return new Promise((resolve , reject) => {

            axios.post("http://localhost:9098/playlist/add" , newSong , {
                headers: {
                    'Accept': 'application/json',
                 'Content-Type': 'application/json' ,
                'Authorization':`Bearer ${sessionStorage.getItem("mytoken")}`
             },
            }).then((res) => {
                console.log(res);
                resolve(res);
            }).catch((error) => {
                console.log(error);
                reject(error);
            })
            
        })

    }
}