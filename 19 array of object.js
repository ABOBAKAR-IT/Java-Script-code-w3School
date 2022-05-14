let data=[
    {
        _id: "617ba32aff29ca67a51a47a3",
        company_id: 1,
        job_title: "RANA ABOBAKAR",
        job_description: "Backend developer",
        job_applied_id: 1,
        location: "wazirabad",
        salary: "120000",
        job_posted_date: "2021-03-03T19:00:00.000Z",
        eligibility_criteria: "nodejs",
        industry: "web",
        region: "pakistan",
        job_type: [
            "developer"
        ],
        due_date: "2021-04-03T19:00:00.000Z",
        experience: "5 year",
        number_of_positions: 10,
        number_of_people_applied: 1,
        createdAt: "2021-10-29T07:30:50.197Z",
        updatedAt: "2021-11-08T05:36:31.761Z",
        job_id: 2,
        __v: 0
    }
]

//console.log(data);
data[0].status="submitted"//  status not exit in array of object but now add status element in array of object...
//let status="submitted"

console.log(data);