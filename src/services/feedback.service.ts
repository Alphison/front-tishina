import { axiosClassic } from "@/api/interceptors"
import { IFeedbackData, IFeedbackResponse } from "@/types/feedback";

export const feedbackSerivce = {
    async create(data: IFeedbackData) {
        return await axiosClassic.post<IFeedbackResponse>('/feedback', data);
    }
} 