import { ClientWithRelations } from "@core/modules/clients/types";
import ListHeader from "@design/List/ListHeader";

type Props = {
  client: ClientWithRelations;
};

const ClientHeader = ({ client }: Props) => {
  return (
    <ListHeader
      title={client.name}
      description={client.projects ? `${client.projects.length} projects` : ""}
      subTitle="Projects"
    />
  );
};

export default ClientHeader;
