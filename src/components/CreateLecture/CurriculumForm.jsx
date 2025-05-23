// src/components/CreateLecture/CurriculumForm.jsx

import { Box, Typography } from "@mui/material";
import TiptapEditor from "../TiptapEditor/TiptapEditor";
import GradientButton from "../Button/GradientButton";
import FormFieldWrapper from "./FormFieldWrapper";
import { useLectureStore } from "../../store/useLectureStore";

export default function CurriculumForm({ onNext, showToast }) {
  const { formData, setFormField } = useLectureStore();

  const handleNext = () => {
    if (!formData.curriculum) {
      showToast("커리큘럼을 입력해주세요.");
      return;
    }
    onNext();
  };

  return (
    <Box>
      <Typography variant="h6" fontWeight={600} gutterBottom>
        과외 커리큘럼
      </Typography>

      <Typography variant="body2" color="var(--text-300)" sx={{ mb: 4 }}>
        과외 커리큘럼을 자세히 설명해주세요.
      </Typography>

      <FormFieldWrapper label="과외 커리큘럼" required>
        <TiptapEditor
          value={formData.curriculum}
          onChange={(content) => {
            setFormField("curriculum", content);
          }}
          placeholder="과외 수업의 진행 계획과 내용을 정리해주세요."
        />
      </FormFieldWrapper>

      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <GradientButton
          fullWidth
          size="md"
          onClick={handleNext}
          sx={{
            py: 1.5,
            width: {
              xs: "100%",
              md: "240px",
            },
          }}
        >
          다음으로
        </GradientButton>
      </Box>
    </Box>
  );
}
