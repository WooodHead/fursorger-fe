import IconButton from "@material-ui/core/IconButton";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import GetAppIcon from "@material-ui/icons/GetApp";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import React from "react";
import { connect } from "react-redux";
import { sendLikeLevel } from "../redux/action-creators/sendLikeLevel";
import { ILevelMetadata } from "../redux/store/ILevelMetadataState";

interface Props {
    levelMetadata: ILevelMetadata;
    sendLikeLevel: (levelId: number) => void;
}

const LevelsTableRow: React.FunctionComponent<Props> = (props: Props) => {
    const metadata = props.levelMetadata;
    return (
        <TableRow key={metadata.id}>
            <TableCell>{metadata.name}</TableCell>
            <TableCell>{metadata.likes}</TableCell>
            <TableCell>{metadata.downloads}</TableCell>
            <TableCell>{metadata.uploader}</TableCell>
            <TableCell>{metadata.uploadDate}</TableCell>
            <TableCell>{metadata.version}</TableCell>
            <TableCell>{metadata.gameVersion}</TableCell>
            <TableCell>
                <IconButton
                    onClick={() => {
                        handleDownloadClicked(metadata.id, metadata);
                    }}
                >
                    <GetAppIcon />
                </IconButton>
            </TableCell>
            <TableCell>
                <IconButton onClick={() => props.sendLikeLevel(metadata.id)}>
                    <ThumbUpAltOutlinedIcon />
                </IconButton>
            </TableCell>
            <TableCell>
                <IconButton
                    onClick={() =>
                        alert(
                            "Instant play is not implemented yet. Thanks for your interest in this feature."
                        )
                    }
                >
                    <PlayCircleOutlineIcon />
                </IconButton>
            </TableCell>
        </TableRow>
    );
};

const handleDownloadClicked = (levelId: number, metadata: { name: string }) => {
    alert(`Starting download of level "${metadata.name}" with id ${levelId}`);
    // fetch level id from server
    // start download of .json file
};

const mapDispatchToProps: Pick<Props, "sendLikeLevel"> = {
    sendLikeLevel,
};

export default connect(
    null,
    mapDispatchToProps
)(LevelsTableRow);