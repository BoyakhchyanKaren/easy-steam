import { TextTypography16 } from "@components/common/ui-elements";
import { Box } from "@mui/material";
import { useMainLayoutStyles } from "layout/common";
import Link from "next/link";

const Links = () => {
    const classes = useMainLayoutStyles();
    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 4, justifyContent: 'space-between' }}>
            <TextTypography16>
                <Link href={'/'} className={classes.links}>Главная</Link>
            </TextTypography16>
            <TextTypography16>
                <Link href={'/terms-conditions'} className={classes.links}>Политика конфиденциальности</Link>
            </TextTypography16>
            <TextTypography16>
                <Link href={'/faq'} className={classes.links}>Вопросы и ответы (FAQ page)</Link>
            </TextTypography16>
        </Box>
    );
};

export default Links;