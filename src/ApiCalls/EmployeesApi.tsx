import { getAPICall, postAPICall, URL } from "./CommonApi"
import Employee from "../Types/Employee"
import { getRequester, getToken } from "../Helpers/UserFunctions"
import { request } from "http"

var token = getToken()
var requester = getRequester()

export const getEmployees = async(employee_id?:string)=>{
    
    
    if (employee_id == undefined)
        employee_id = ""

    try {
        const response = await getAPICall(URL+"employees/get?requester="+requester+"&token="+token+"&employee_id="+employee_id, {
        } )
        return { data: response.data};
    } catch (error:any) {
        return { data: error };
    }
}

export const createEmployee = async(employee:Employee)=>{
    try {
        const response = await postAPICall(URL+"employees/create", {
            requester: requester,
            token: token,
            first_name: employee.first_name,
            middle_name: employee.middle_name,
            last_name: employee.last_name,
            // role_id: 1,
            contact_no: employee.contact_no,
            address: employee.address,
            position_id: employee.position_id,
            rate: employee.rate,
            payout: employee.payout,
            SSS: employee.SSS,
        })
        return { data: response.data};
    } catch (error:any) {
        return { data: error };
    }
}

export const updateEmployee = async(employee:Employee)=>{
    try {   
        const response = await postAPICall(URL+"employees/update/"+String(employee.id), {
            requester: requester,
            token: token,
            first_name: employee.first_name,
            middle_name: employee.middle_name,
            last_name: employee.last_name,
            contact_no: employee.contact_no,
            address: employee.address,  
            position_id : employee.position_id,
            rate: employee.rate,
            payout: employee.payout,
            SSS: employee.SSS,
        })
        return { data: response.data};
    } catch (error:any) {
        return { data: error };
    }
}

export const deleteEmployee = async(employee_id:string) => {
    try {
        const response = await postAPICall(URL+"employees/delete/"+String(employee_id), {
            requester: requester,
            token: token,
        })
        return { data: response.data};
    } catch (error:any) {
        return { data: error };
    }
}

export const markAttendance = async(employee_id:string, date_of_attendance:string, status:string) => {
    try {
        const response = await postAPICall(URL+"attendances/mark", {
            requester: requester,
            token: token,
            employee_id: employee_id,
            date_of_attendance: date_of_attendance,
            status: status
        })
        return { data: response.data};
    } catch (error:any) {
        return { data: error };
    }
}

export const getAttendance = async(employee_id:string, date_from:string, date_to:string) => {
    try {
        const response = await getAPICall(URL+"attendances/get?"+
            "requester="+requester+
            "&token="+token+
            "&employee_id="+employee_id+
            "&status="+
            "&date_from="+date_from+
            "&date_to="+date_to
        , {
        })
        return { data: response.data};
    } catch (error:any) {
        return { data: error };
    }
}

export const changeStatus = async(attendance_id:string, status:string) => {
    try {
        const response = await postAPICall(URL+"attendances/change_status", {
            requester: requester,
            token: token,
            id: attendance_id,
            status: status
        })
        return { data: response.data};
    } catch (error:any) {
        return { data: error };
    }
}

export const getPositions = async()=> {
    try {
        const response = await getAPICall(URL+"positions/get?"+
            "requester=" + requester +
            "&token="+token,{})
        return { data: response.data};
    } catch (error:any) {
        return { data: error };
    }
}