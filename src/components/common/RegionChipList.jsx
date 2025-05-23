// 📄 src/components/common/RegionChipList.jsx
import { Box, Chip } from "@mui/material";

export default function RegionChipList({ regions = [], onDelete }) {
  if (!regions.length) return null;

  return (
    <Box mt={2} display="flex" flexWrap="wrap" gap={1}>
      {regions.map((region, index) => (
        <Chip
          key={index}
          label={region.displayName || region.name}
          onDelete={() => onDelete(index)}
          variant="outlined"
          sx={{
            borderColor: "var(--primary-100)",
            color: "var(--primary-100)",
            fontSize: 14,
            fontWeight: 500,
            "& .MuiChip-deleteIcon": {
              color: "var(--primary-100)",
              "&:hover": {
                color: "var(--primary-200)",
              },
            },
          }}
        />
      ))}
    </Box>
  );
}
