import { Label } from '@pages/SignUp/style';
import { FileInput, TextArea } from './style';

const AddRecipeInputGroup = () => {
    return (
        <div>
            <Label>
                <span>description</span>
                <div>
                    <TextArea></TextArea>
                </div>
            </Label>
            <Label>
                <span>input file</span>
                <div>
                    <FileInput type="file" />
                </div>
            </Label>
        </div>
    );
};

export default AddRecipeInputGroup;
