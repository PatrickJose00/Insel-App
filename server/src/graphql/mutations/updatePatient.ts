import {Patient} from "../../../db/models/patient"

const updatePatientResolver = async (context: any, args: any) => {
    await Patient.update({name: args.name, created_date: args.created_date}, {where: {id: args.id}});
    return args.id;
};

export default updatePatientResolver;
