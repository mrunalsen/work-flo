export class Projects {
    public id: number
    public title: string;
    public info: string;
    public category: string;
    public summary: string;
    public detail: string;
    public billingType: string;
    public status: string;

    constructor(
        id: number,
        title: string,
        info: string,
        category: string,
        summary: string,
        detail: string,
        billingType: string,
        status: string
    ) {
        this.id = id
        this.title = title
        this.info = info
        this.category = category
        this.summary = summary
        this.detail = detail
        this.billingType = billingType
        this.status = status
    }
}